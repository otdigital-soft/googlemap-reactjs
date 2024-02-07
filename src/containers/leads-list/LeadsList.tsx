import { useState, useEffect, createRef } from "react";
import LeadCard from "containers/lead-card";
import { LeadT } from "utils/lead";
import styled from "@emotion/styled";
import Spinner from "components/spinner";

const ListWrapper = styled.div((props: any) => ({
  display: "flex",
  width: props.collapsed ? "100%" : "calc(50% - 8px)",
  margin: "8px 4px",
}));

type LeadsListProps = {
  leads: Array<LeadT>;
  visitedPos: string | undefined;
  isLoading: boolean;
  collapsed: boolean;
};

const generateColor = (index: number) => {
  switch (index) {
    case 1:
      return "#6594DB";
    case 2:
      return "#E6A744";
    case 3:
      return "#BF2828";
    case 0:
      return "#65C48D";
    default:
      return "#6594DB";
  }
};

const LeadsList = ({
  leads,
  visitedPos,
  isLoading,
  collapsed,
}: LeadsListProps) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(leads?.length)
      .fill(null)
      .map((_, index) => elRefs[index] || createRef());
    setElRefs(refs);
  }, [leads?.length]);

  return (
    <div className="flex flex-wrap justify-center items-center w-full h-full pl-5 pr-1 overflow-auto bg-gray-300">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {leads?.map((lead, index) => (
            <ListWrapper collapsed={collapsed} key={index}>
              <LeadCard
                lead={lead}
                selected={Number(visitedPos) === index}
                color={generateColor(index % 4)}
                refProp={elRefs[index]}
                noTriangle={true}
              />
            </ListWrapper>
          ))}
        </>
      )}
    </div>
  );
};
export default LeadsList;
