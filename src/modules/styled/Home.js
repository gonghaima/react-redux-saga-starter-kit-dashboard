import styled from "styled-components";
import theme, { borderColor, itemBgColor } from "../theme";
import { subTitleColor } from "../../modules/theme";
import { responsive } from "../../modules/styled/utils/helpers";

const Container = styled.div`
  @media (min-width: ${theme.breakpoints[1]}px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 64px;
    padding-top: 64px;
  }

  @media (min-width: ${theme.breakpoints[2]}px) {
    padding-bottom: 64px;
    padding-top: 64px;
  }

  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  position: relative;
  width: 100%;
  padding: 16px;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

const DetailsSection = styled.div`
  border-top: 1px solid ${borderColor};
  text-align: left;
  padding-left: ${theme.spacer[4]};
  padding: ${theme.spacer[3]} ${theme.spacer[0]} ${theme.spacer[3]} ${
  theme.spacer[4]
}
  width: 100%;
  display: block;

  a {
    display: block;
  }
`;

const DisplayNumberSelect = styled.select`
  color: ${theme.palette.selectColor};
  box-sizing: border-box;
  border: 0;
  border-radius: 2px;
  display: block;
  height: 28px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1;
  padding: 6px;
  white-space: nowrap;
  width: 100%;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  margin: 0em;
  box-sizing: border-box;
`;

const Divider = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${theme.palette.borderColor};
  margin: 0.7em 0.4em;
  padding: 0;
`;
const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1.7fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
  color: ${theme.palette.titleColor};
  padding-top: 142px;

  /* stylelint-disable */
  ${p =>
    responsive({
      "ix-only": `
        display: flex;
      `,
      lg: `
        grid-template-columns: 0.1fr 1.9fr;
      `
    })};
  /* stylelint-enable */
`;

const Image = styled.img`
  height: 20rem;
  box-sizing: border-box;
  max-width: 100%;
  display: block;
`;

const ItemPrice = styled.h6`
  color: ${theme.palette.focusedColor};
  margin: 0;
`;

const ImageSection = styled.div`
  padding: 16px;
  margin: 0;
`;

const Item = styled.div`
  background: ${itemBgColor};
  align-items: center;
  border: solid 0.1rem ${borderColor};
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
`;

const ItemTitle = styled.h4`
  color: ${theme.titleColor};
  margin: ${theme.spacer[0]} ${theme.spacer[0]} ${theme.spacer[1]}
    ${theme.spacer[0]};
`;

const ItemDescription = styled.h4`
  color: ${subTitleColor};
  margin: 0px 0px ${theme.spacer[2]} 0px;
`;

const Pagination = styled.div`
  display: flex;
  flex-direction: row-reverse;
  ul {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
  }

  li {
    display: inline-block;
  }
  a {
    z-index: 3;
    color: #000;
    cursor: pointer;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    text-decoration: none;
  }
  .active a:hover,
  .active a {
    background: #fff;
    outline: unset;
    border-bottom: 3px solid ${theme.palette.focusedColor};
  }
  .disabled a {
    color: ${theme.palette.subTitleColor};
    cursor: not-allowed;
  }
  /* stylelint-disable */
  ${p =>
    responsive({
      "ix-only": `
        font-size: 10px
      `,
      ix: `
        font-size: 10px
      `,
      md: `
        font-size: 16px
      `
    })};
  /* stylelint-enable */
`;

const ProductCount = styled.span`
  vertical-align: sub;
`;
const ProductGrid = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${theme.spacer[2]};
  grid-template-columns: 100%;
  list-style: none;
  margin: 0px ${theme.spacer[4]} auto 0;
  padding: 0;
  /* stylelint-disable */
  ${p =>
    responsive({
      ix: `
        grid-gap: ${theme.spacer[3]};
        width: 100%;
      `,
      md: `
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
      `,
      lg: `
        grid-template-columns: repeat(3, 1fr);
      `,
      xl: `
        grid-gap: ${theme.spacer[4]};
        grid-template-columns: repeat(4, 1fr);
      `
    })};
  /* stylelint-enable */

  > li {
    display: flex;
  }
`;

const Screen = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
`;

const Title = styled.h2`
  margin: 0;
  color: ${theme.palette.titleColor};
`;

const Summary = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0;
  color: ${subTitleColor};
`;
const SummaryItem = styled.div`
  margin: 0;
  width: 10%;
`;

const SubHeader = styled.div`
  top: 70px;
  right: 0;
  left: 0;
  position: fixed;
  color: #fff;
  background-color: ${theme.palette.headerBgColor};
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 100%;
  display: flex;
  align-items: center;
  zindex: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: row;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  height: 70px;
  z-index: 1201;
`;

const SubHeaderLeft = styled.h3`
  width: 230px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2%;
  color: ${theme.palette.focusedColor} !important;
  ${p =>
    responsive({
      "ix-only": `
        display: none;
      `
    })};
  /* stylelint-enable */
`;

const SubHeaderRight = styled.div`
  flex-grow: 1;
  height: 100%;
  border-left: ${theme.palette.borderColor} solid 2px;
  display: flex;
  align-items: center;
  padding: 1%;
  justify-content: space-between;
  color: ${theme.palette.focusedColor};
}
`;

const SettingOptions = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

export {
  Container,
  DetailsSection,
  DisplayNumberSelect,
  Divider,
  HomeWrapper,
  Image,
  ImageSection,
  Item,
  ItemDescription,
  ItemPrice,
  ItemTitle,
  Pagination,
  Screen,
  SubHeader,
  SubHeaderLeft,
  SubHeaderRight,
  SettingOptions,
  ProductCount,
  ProductGrid,
  Summary,
  SummaryItem,
  Title
};
