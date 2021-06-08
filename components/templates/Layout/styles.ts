import styled from "styled-components";
import { colors, screens } from "../../../styles/constants";

export const PageTemplate = styled.div`
  background-color: ${colors.bgGray};
  width: 100%;
  min-height: 100vh;
  @media (${screens.sm}) {
  }
`;
