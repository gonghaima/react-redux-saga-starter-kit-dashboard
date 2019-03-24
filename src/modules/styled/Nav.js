import styled from "styled-components";
import theme from "../theme";
import { responsive } from "../../modules/styled/utils/helpers";

const NavigationWrapper = styled.nav`
  width: 230px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  /* stylelint-disable */
  ${p =>
    responsive({
      "ix-only": `
        display: none;
      `
    })};
  /* stylelint-enable */
`;

const StickyContainer = styled.div`
  position: fixed;
  height: 100vh;
  background-color: ${theme.palette.itemBgColor};
`;

const NavUl = styled.ul`
  width: 230px;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
const NavLi = styled.li`
  display: flex;
  box-sizing: border-box;
  padding-top: 11px;
  padding-bottom: 11px;
  &:hover {
    background: ${theme.palette.headerBgColor};
    cursor: pointer;
  }
`;

const NavAnchor = styled.a`
  display: flex;
  color: ${theme.palette.focusedColor};
  padding: 6px 0px 6px 40px;
`;
const NavDiv = styled.div``;
const NavLiText = styled.span`
  padding-left: 10px;
`;

export {
  NavigationWrapper,
  NavAnchor,
  NavDiv,
  NavLiText,
  NavUl,
  NavLi,
  StickyContainer
};
