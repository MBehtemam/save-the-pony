import styled from "styled-components";

interface ICol {
  size?: number;
}
const Col = styled.div<ICol>`
  /* flex: ${props => (props.size ? 100 / props.size + "%" : 1)}; */
  display: flex;
  flex-direction: column;
  flex-basis: ${props => (props.size ? 100 / props.size + "%" : 1)};
`;

export default Col;
