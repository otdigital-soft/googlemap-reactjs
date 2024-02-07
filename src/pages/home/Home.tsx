import { useState, useEffect } from "react";
import Layout from "components/layout";
import Logo from "components/logo";
import Sidebar from "components/sidebar";
import MapScreen from "containers/map-screen";
import { getLeads } from "api";
import { IFilterParams, LeadT } from "utils/lead";
import SearchInput from "containers/search-input";
import StageGroup from "containers/stage-group";
import SortBy from "containers/sortby";
import LeadsList from "containers/leads-list";
import { MenuUnFoldIcon } from "utils/imgImport";
import Filters from "containers/filters";
import styled from "@emotion/styled";
import useFilters from "hooks/useFilters";
import { ISelectOption } from "utils/types";

const ButtonWrapper = styled.button((props: any) => ({
  color: props.open ? "#2563EB" : "rgba(75, 85, 99, 0.5)",
}));
const initialQueryParams = {
  product: null,
  agent: null,
  client: null,
  stage: null,
  from: null,
  to: null,
  longitude: null,
  latitude: null,
  name: null,
};

const Home = () => {
  const [coordinates, setCoordinates] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [visitedPos, setVisitedPos] = useState<string>();
  const [leads, setLeads] = useState<Array<LeadT>>([]);
  const [filteredLeads, setFilteredLeads] = useState<Array<LeadT>>([]);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const [clientOptions, setClientOptions] = useState<Array<ISelectOption>>([]);
  const [productOptions, setProductOptions] = useState<Array<ISelectOption>>(
    []
  );
  const [agentOptions, setAgentOptions] = useState<Array<ISelectOption>>([]);
  const [queryParams, setQueryParams] =
    useState<IFilterParams>(initialQueryParams);

  const { clients, products, agents } = useFilters();

  useEffect(() => {
    setIsLoading(true);
    setProductOptions(
      products.map((p) => ({
        value: p._id,
        label: p.product_name,
      }))
    );
    setClientOptions(
      clients.map((c) => ({
        value: c._id,
        label: c.firstName + " " + c.lastName,
      }))
    );
    setAgentOptions(
      agents.map((a) => ({
        value: a._id,
        label: a.firstName + " " + a.lastName,
      }))
    );

    setIsLoading(false);
  }, [products, agents, clients]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
    setIsLoading(true);
    getLeads().then((data) => {
      setLeads(data?.filter((place: LeadT) => place.name));
      setFilteredLeads(data?.filter((place: LeadT) => place.name));
      setIsLoading(false);
    });
  }, []);

  const toggleFilters = () => {
    setOpenFilter((o) => !o);
  };

  const filterSearch = (params: IFilterParams): void => {
    setQueryParams(params);
    searchByParams(params);
  };
  const primarySearch = (name: string) => {
    const newParams = { ...queryParams, name };
    setQueryParams({ ...queryParams, name });
    searchByParams(newParams);
  };

  const searchByParams = (params: IFilterParams) => {
    const {
      product,
      agent,
      client,
      stage,
      from,
      to,
      latitude,
      longitude,
      name,
    } = params;
    setIsLoading(true);
    getLeads({
      product,
      agent,
      client,
      stage,
      from,
      to,
      latitude,
      longitude,
      name,
    }).then((data) => {
      setLeads(data);
      setIsLoading(false);
    });
  };

  return (
    <Layout>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}>
        <div className="px-5 py-4">
          <Logo />
          <SearchInput keyDown={primarySearch} />
          <StageGroup />
          <div className="flex items-center justify-between my-4">
            <SortBy />
            <ButtonWrapper
              open={openFilter}
              className="bg-transparent border-none flex items-center font-semibold"
              onClick={toggleFilters}>
              <MenuUnFoldIcon stroke={openFilter ? "#2563EB" : "#4B5563"} />
              Filters
            </ButtonWrapper>
          </div>
          {openFilter && (
            <Filters
              search={filterSearch}
              clients={clientOptions}
              agents={agentOptions}
              products={productOptions}
            />
          )}
        </div>

        <LeadsList
          leads={filteredLeads.slice(0, 20)}
          collapsed={collapsed}
          isLoading={isLoading}
          visitedPos={visitedPos}
        />
      </Sidebar>
      <main className="flex-1">
        {!isLoading && (
          <MapScreen
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            setVisitedPos={setVisitedPos}
            setLeads={setLeads}
            leads={filteredLeads.length ? filteredLeads : leads} //to get a card component
          />
        )}
      </main>
    </Layout>
  );
};

export default Home;
