import styled from "styled-components";
interface IRow {
  direction?: "row" | "column";
  horizontalAlign?: "flex-start" | "flex-end" | "center";
  verticalAlign?: "flex-start" | "flex-end" | "center";
}
const Row = styled.div<IRow>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.horizontalAlign || "flex-start"};
  align-items: ${props => props.verticalAlign || "flex-start"};
`;
export default Row;
