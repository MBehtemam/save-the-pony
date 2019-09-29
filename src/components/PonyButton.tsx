import styled from "styled-components";

const PonyButton = styled.div`
  width: 150px;
  height: 150px;
  background-color: #880e4f;
  padding: 10px;
  border: 1px solid brown;
  border-radius: 15px;
  cursor: pointer;
  &.selected {
    border-color: white;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
export default PonyButton;
