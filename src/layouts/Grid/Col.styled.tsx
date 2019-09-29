import styled from "styled-components";

interface ICol {
  size?: number;
  horizontalAlign?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between";
  verticalAlign?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between";
}
const Col = styled.div<ICol>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.horizontalAlign || "initial"};
  align-items: ${props => props.verticalAlign || "initial"};
  flex-basis: ${props =>
    props.size ? (props.size ? 100 / props.size + "%" : 1) : 1};
`;

export default Col;
