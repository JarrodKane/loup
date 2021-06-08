import styled from "styled-components";
import { colors, screens } from "../../../styles/constants";

export const CardContainer = styled.div`
  background-color: ${colors.bgGray};
  width: 100%;

  @media (${screens.sm}) {
    background-color: red;
  }
`;
