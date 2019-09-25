import styled from "styled-components";
interface ICol {
  size?: number;
}
const Col = styled.div<ICol>`
  flex: ${props => props.size || 1};
`;

export default Col;
