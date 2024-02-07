import styled from "@emotion/styled";
import { addAlpha } from "utils/common";

type CardProps = {
  children: React.ReactNode;
  color?: string;
};

// const colors = {
//   blue: "rgba(101, 148, 219, 0.3",
//   green: "rgba(101, 196, 141, 0.3)",
//   yellow: "rgba(230, 167, 68, 0.3)",
// };

const CardWrapper = styled.div((props) => ({
  background: `linear-gradient(
      359.93deg,
      ${addAlpha(props.color ?? "#6594DB", 0.3)} 1.36%,
      rgba(255, 255, 255, 0) 47.55%
    ),
    #ffffff`,
  borderBottom: `8px solid ${props.color}`,
  minWidth: "280px",
}));

export const Card = ({ children, color = "#6594DB" }: CardProps) => {
  return (
    <CardWrapper
      color={color}
      className="w-full rounded overflow-hidden shadow-lg">
      {children}
    </CardWrapper>
  );
};
