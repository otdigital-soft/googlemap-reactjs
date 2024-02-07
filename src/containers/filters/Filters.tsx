import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Select from "components/select";
import { MapPinIcon } from "utils/imgImport";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
import { DateRangeType, ILatLng, ISelectOption } from "utils/types";
import { IFilterParams } from "utils/lead";

const stageOptions = [
  {
    value: "green",
    label: "Green - Hot Lead (0 to 2 days)",
  },
  {
    value: "blue",
    label: "Blue - Warm (3 to 5 days)",
  },
  {
    value: "amber",
    label: "Amber - Dying (6 to 7 days old)",
  },
  {
    value: "red",
    label: "Red - Cold (Over 8 days old)",
  },
];

interface FiltersProps {
  search: (val: IFilterParams) => void;
  clients: Array<ISelectOption>;
  products: Array<ISelectOption>;
  agents: Array<ISelectOption>;
}
const Filters = ({ search, clients, products, agents }: FiltersProps) => {
  const [dateRange, setDateRange] = useState<DateRangeType>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [product, setProduct] = useState("");
  const [agent, setAgent] = useState("");
  const [client, setClient] = useState("");
  const [stage, setStage] = useState("");
  const [addr, setAddr] = useState("");
  const [latLng, setLatLng] = useState<ILatLng>({
    lat: 0,
    lng: 0,
  });

  const handleAddrSelect = (address: string) => {
    setAddr(address);
    geocodeByAddress(address)
      .then((results: any) => getLatLng(results[0]))
      .then((geo: ILatLng) => setLatLng(geo))
      .catch((error: any) => console.error("Error", error));
  };

  const handleSearch = () => {
    search({
      product,
      agent,
      client,
      stage,
      from: dateRange.startDate,
      to: dateRange.endDate,
      latitude: latLng.lat,
      longitude: latLng.lng,
    });
  };

  return (
    <div>
      <PlacesAutocomplete
        value={addr}
        onChange={(addr: string) => setAddr(addr)}
        onSelect={handleAddrSelect}>
        {({
          getInputProps,
          suggestions,
          getSuggestionItemProps,
          loading,
        }: any) => (
          <div>
            <div className="relative">
              <input
                icon={MapPinIcon}
                {...getInputProps({
                  placeholder: "Location",
                  className:
                    "location-search-input block w-full p-2 text-sm text-gray-900 border border-gray-400 rounded-md bg-gray-50 focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  id: "location-search",
                })}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <img src={MapPinIcon} className="w-6 h-6" alt="icon" />
              </div>
            </div>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion: any, idx: number) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                    key={idx}>
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <div className="flex gap-2 items-center">
        <Select
          selected={client}
          callback={setClient}
          options={clients}
          placeholder="Client"
          id="client"
        />
        <Select
          selected={stage}
          callback={setStage}
          options={stageOptions}
          placeholder="Stage"
          id="stage"
        />
        <Select
          selected={product}
          callback={setProduct}
          options={products}
          placeholder="Product"
          id="product"
        />
      </div>
      <div className="flex gap-2 items-center">
        <Select
          selected={agent}
          callback={setAgent}
          options={agents}
          placeholder="Agent"
          id="agent"
        />
        <Datepicker
          value={dateRange}
          onChange={(val: any) => setDateRange(val)}
          placeholder={"Select Date"}
          inputClassName="date-range-input border border-gray-400 rounded-md font-bold !text-gray-900 !bg-gray-50 focus-visible:outline-none outline-none"
          containerClassName="mt-2"
        />
      </div>
      <button
        type="button"
        onClick={handleSearch}
        className="w-full font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mt-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
        Search
      </button>
    </div>
  );
};

export default Filters;
