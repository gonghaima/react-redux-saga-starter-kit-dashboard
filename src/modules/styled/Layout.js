import styled from "styled-components";
import theme, { shadow } from "../theme";
import { responsive } from "../../modules/styled/utils/helpers";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1%;;
  align-items: center;
  /* stylelint-disable */
  width:100%;
  background: ${theme.palette.primary.appColor}
  box-shadow: ${shadow}
  /* stylelint-enable */
`;

const Content = styled.div`
  width: 98%;
  margin-top: 1%;
  background: #fff;
  box-shadow: ${shadow};
`;

const ContentHead = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: ${theme.palette.mainBgColor} solid 1px;
`;

const ContentList = styled.div`
  display: flex;
  align-items: center;
`;
const ContentListWithBorder = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1%;
  border-bottom: ${theme.palette.mainBgColor} solid 1px;
  /* stylelint-disable */
  ${p =>
    responsive({
      "ix-only": `
      padding-left: 5%;
      `
    })};
  /* stylelint-enable */
`;

const contentHeadCommonStyle = `font: inherit;
outline: none;
border: 0;
`;
const contentHeadCommonStyleObj = {
  font: "inherit",
  outline: "none",
  border: 0
};

const ContentHeadSearch = styled.input`
  margin-left: 15px;
  ${contentHeadCommonStyle}
`;
const Search = styled.input`
  width: 100%;
  ${contentHeadCommonStyle}
`;

const ContentListIcon = styled.div`
  flex-grow: 1;
  justify-content: center;
  display: flex;
  flex: 1 1 0;
  width: 0;
`;
const ContentListItem = styled.div`
  ${contentHeadCommonStyle}
  flex-basis: 0;
  flex-grow:9;
  padding: 15px 0px 15px 0px;
  color: ${theme.palette.focusedColor}
  border-bottom: ${theme.palette.mainBgColor} solid 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  /* stylelint-disable */
  ${p =>
    responsive({
      "ix-only": `
      flex-grow:5;
      `
    })};
  /* stylelint-enable */
`;

const ContentItem = styled.div(props => ({
  ...contentHeadCommonStyleObj,
  flexBasis: 0,
  flexGrow: 9,
  padding: "15px 0px 15px 0px",
  color: theme.palette.focusedColor,
  borderBottom: props.last ? "none" : `${theme.palette.mainBgColor} solid 1px;`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontWight: "bold"
}));

const generateContentItemResponsive = responsive({
  "ix-only": `flex-grow:5;`
});

const ContentListUser = styled.div`
  flex: 1 1 0;
  width: 0;
`;

const ContentListItemWithoutBorder = styled.div`
  ${contentHeadCommonStyle}
  flex-grow:9;
  padding: 15px 0px 15px 0px;
`;

const DetailsCommon = `
flex: 1 1 0;
width: 0;
color: ${theme.palette.titleColor};
padding-right: ${props => props.right}px;
`;

const Details = styled.small`
  display: block;
  ${DetailsCommon}
`;

const DetailsDesktop = styled.small`
  display: block;
  ${DetailsCommon}
  /* stylelint-disable */
  ${p =>
    responsive({
      "ix-only": `
      display: none;
    `
    })};
  /* stylelint-enable */
`;

const DetailsMobile = styled.small`
  display: none;
  color: ${theme.palette.titleColor};
  /* stylelint-disable */
  ${p =>
    responsive({
      "ix-only": `
      display: block;
    `
    })};
  /* stylelint-enable */
`;

const DetailsEllip = styled.small`
  width: 0;
  color: ${theme.palette.titleColor};
  padding-right: ${props => props.right}px;
  /* stylelint-disable */
  ${p =>
    responsive({
      "ix-only": `
      padding-right:${p.mob}px;
    `
    })};
  /* stylelint-enable */
`;

const iconStyle = {
  background: "darkgray",
  color: "lightgray",
  borderRadius: "9px",
  border: 0
};
export {
  Content,
  ContentWrapper,
  ContentHead,
  ContentList,
  ContentListWithBorder,
  ContentListIcon,
  ContentListItem,
  ContentItem,
  generateContentItemResponsive,
  ContentListUser,
  ContentListItemWithoutBorder,
  ContentHeadSearch,
  Details,
  DetailsEllip,
  DetailsMobile,
  DetailsDesktop,
  iconStyle,
  Search
};
