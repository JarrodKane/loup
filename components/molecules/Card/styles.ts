import styled from "styled-components";
import { colors, screens } from "../../../styles/constants";

export const CardContainer = styled.div`
  background-color: ${colors.bgLight};
  width: 25%;
  margin: 1rem;
  border-radius: 5%;
  text-transform: uppercase;
  transition: all 100ms linear;
  cursor: pointer;
  color: ${colors.textLight};

  /* BASIC BOX SHADOW */
  -webkit-box-shadow: 0px 6px 15px -8px rgba(0, 0, 0, 0.67);
  -moz-box-shadow: 0px 6px 15px -8px rgba(0, 0, 0, 0.67);
  box-shadow: 0px 6px 15px -8px rgba(0, 0, 0, 0.67);

  @media (${screens.md}) {
    width: 45%;
  }

  @media (${screens.sm}) {
    width: 85%;
  }

  :hover {
    -webkit-box-shadow: 0px 6px 18px -2px rgba(0, 0, 0, 0.74);
    -moz-box-shadow: 0px 6px 18px -2px rgba(0, 0, 0, 0.74);
    box-shadow: 0px 6px 18px -2px rgba(0, 0, 0, 0.74);

    /* Scale is commented out due to a funny bounce effect with the text when the size is changing */
    /* z-index: 1;
    -webkit-transform: scale(1.02) translate3d(0, 0, 0) perspective(1px);
    -moz-transform: scale(1.02) translate3d(0, 0, 0) perspective(1px);
    -o-transform: scale(1.02) translate3d(0, 0, 0) perspective(1px);
    -ms-transform: scale(1.02) translate3d(0, 0, 0) perspective(1px);
    transform: scale(1.02) translate3d(0, 0, 0) perspective(1px); */
  }
`;

export const ContentContainer = styled.div`
  padding: 5px;
  margin-top: 5px;
  padding-bottom: 30px;
  text-align: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 204px;
  position: relative;
`;
