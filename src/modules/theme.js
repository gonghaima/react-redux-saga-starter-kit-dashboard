export const headerHeight = 70;
export const appColor = '#d9d8d9';
export const mainBgColor = '#dcdbdc';
export const headerBgColor = '#f3f2f2';
export const borderColor = '#E5E5E5';
export const titleColor_0 = '#6A6A6A';
export const titleColor = '#6A6A6A';
export const subTitleColor = '#BFBFBF';
export const space = [0, 4, 8, 16, 32, 64, 128];
export const selectColor = '#7a7a7a';
export const focusedColor = '#272727';
export const anchorHoverColor = '#337ab7';
export const itemBgColor = '#ffffff';

export const easing = 'cubic-bezier(0.35, 0.01, 0.77, 0.34);';
export const shadow = `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);`;

export default {
  breakpoints: [400, 768, 1024, 1280, 1920],
  palette: {
    primary: appColor,
    mainBgColor,
    headerBgColor,
    borderColor,
    titleColor,
    selectColor,
    subTitleColor,
    focusedColor,
    anchorHoverColor,
    itemBgColor
  },
  button: {
    borderRadius: {
      xs: 4,
      lg: 28,
      xl: 32
    },
    padding: {
      lg: [12, 28],
      xl: [14, 32]
    }
  },
  spacer: space.map(c => c + 'px')
};
