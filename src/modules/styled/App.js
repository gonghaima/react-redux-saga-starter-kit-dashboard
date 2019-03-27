import styled from "styled-components";
import theme, { appColor, titleColor } from "../theme";

const AppWrapper = styled.div`
  display: flex;
  background-color: ${appColor};
  flex-direction: column;
  min-height: 100vh;
  opacity: 1 !important;
  position: relative;
  transition: opacity 0.5s;
  h3,
  h5 {
    color: ${titleColor};
  }
  .selected {
    background: ${theme.palette.headerBgColor};
  }
`;

const Main = styled.main`
  min-height: 100vh;
`;

export { AppWrapper, Main };
