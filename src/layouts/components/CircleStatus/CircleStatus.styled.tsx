import styled from "styled-components";
import ITheme from "../../theme/ITheme";
import StatusEnum from "../../../logic/Enums/StatusEnum";
interface ICircleStatus {
  status: StatusEnum;
  theme: ITheme;
}
const CircleStatus = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  background-color: ${(props: ICircleStatus) => {
    const { status } = props;
    if (status === StatusEnum.ERROR) {
      return props.theme.colors.error;
    } else if (status === StatusEnum.NORMAL) {
      return "#fff";
    } else if (status === StatusEnum.SUCCESS) {
      return props.theme.colors.success;
    } else if (status === StatusEnum.WARNING) {
      return props.theme.colors.warning;
    } else {
      return "#fff";
    }
  }};
`;
export default CircleStatus;
