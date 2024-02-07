import styled from "@emotion/styled";
import { Card, CardContent } from "components/card";
import CardChip from "components/card-chip";
import { MapPinIcon, ShopIcon } from "utils/imgImport";
import { LeadT } from "utils/lead";

type LeadCardProps = {
  lead: LeadT;
  selected?: boolean;
  refProp?: any;
  color?: string;
  noTriangle: boolean;
};

const demoChips = [
  {
    icon: ShopIcon,
    text: "Barber Shop",
  },
  {
    icon: MapPinIcon,
    text: "Kawangware",
  },
];

const TriangleBorder = styled.div((props) => ({
  margin: "0 auto",
  borderTop: `0 solid ${props.color}`,
  borderLeft: `0 solid ${props.color}`,
  borderBottom: `0 solid ${props.color}`,
  borderRight: `0 solid ${props.color}`,
  transition: "0.8s 0.2s",
  width: "0",
  height: "0",
  background: "transparent",
  borderBottomColor: "transparent",
  borderRightColor: "transparent",
  borderLeftColor: "transparent",
  borderRightWidth: "10px",
  borderBottomWidth: "10px",
  borderLeftWidth: "10px",
  borderTopWidth: "10px",
}));

const LeadCard = ({
  lead,
  selected = false,
  refProp = null,
  color,
  noTriangle,
}: LeadCardProps) => {
  if (selected)
    refProp?.current?.scrollIntoView({ behaviour: "smooth", block: "start" });
  return (
    <>
      <Card color={color}>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={lead.product?.image}
              className="w-[42px] h-[42px]"
              alt={lead.product?.product_name}
            />
            <div>
              <h3 className="text-gray-600 font-extrabold text-[17.5px] leading-[21px]">
                {lead.product.product_name}
              </h3>
              <p className="text-[17.5px] leading-[21px] text-gray-600 capitalize">
                {lead.name}
              </p>
              <p className="text-[17.5px] leading-[21px] text-gray-600">
                {lead.agent.phoneNumber}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {demoChips.map((chip, idx) => (
              <CardChip key={idx} text={chip.text} icon={chip.icon} />
            ))}
          </div>
        </CardContent>
      </Card>
      {!noTriangle && <TriangleBorder color={color ?? "#6594DB"} />}
    </>
  );
};
export default LeadCard;
