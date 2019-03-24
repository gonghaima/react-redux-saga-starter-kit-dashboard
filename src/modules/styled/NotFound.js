import styled from 'styled-components';
import { responsive } from '../styled/utils/helpers';
import theme from '../theme';

const Background = styled.div`
  background: #000 linear-gradient(to bottom, #00b4d5 0%, #002529 100%) fixed;
  color: #fff;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  &:before {
    background: linear-gradient(to bottom, #000, #fff);
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.4;
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(-20deg) scale(1.5) translate(0, 43%);
  }
`;

const Heading = styled.h1`
  line-height: 1;
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 0;
`;

const LinkText = styled.h2`
  margin-top: 0;
  box-sizing: border-box;
  font-size: 32px;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 0;
`;

const StyledContainer = styled.div`
  align-items: center;
  text-align: center;

  h1,
  a {
    color: #fff;
    line-height: 1;
  }
  a {
    text-decoration: underline;
  }
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Lato, sans-serif;
  font-size: 16px;
  /* stylelint-disable */
  ${/* istanbul ignore next */ p =>
    responsive({
      ix: `
 
    `,
      md: `
      padding: 64px 32px;
    `,
      lg: `
      padding-bottom: 64px;
      padding-top: 64px;
    `,
      xl: `
      grid-gap: ${theme.spacer[4]};
      grid-template-columns: repeat(4, 1fr);
    `
    })};
  /* stylelint-enable */
`;

export { Background, Heading, LinkText, StyledContainer };
