import styled from "@emotion/styled";
import LeadCard from "containers/lead-card";
import { LeadT } from "utils/lead";

interface MakrerProps {
  show: boolean;
  lead: LeadT;
}

const MarkerCard = styled.div`
  position: absolute;
  top: 0;
  transform: translate(-48%, -100%);
`;
export const Marker = ({ show, lead }: MakrerProps) => {
  const markerStyle = {
    border: "2px solid white",
    borderRadius: "50%",
    height: 16,
    width: 16,
    backgroundColor: "#65C48D",
    cursor: "pointer",
    zIndex: 10,
  };

  return (
    <>
      <div style={markerStyle} />
      <MarkerCard>
        {show && <LeadCard lead={lead} noTriangle={false} />}
      </MarkerCard>
    </>
  );
};
