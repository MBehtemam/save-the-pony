import styled from "styled-components";

const PonyButton = styled.div`
  width: 250px;
  height: 250px;
  background-color: brown;
  padding: 10px;
  border: 1px solid brown;
  border-radius: 15px;
  cursor: pointer;
  &.selected {
    border-color: white;
  }
  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export default PonyButton;
