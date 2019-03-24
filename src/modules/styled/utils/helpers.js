import theme from '../../theme';

const isNumber = val => typeof val === 'number';

const px = val => (isNumber(val) ? ''.concat(val, 'px') : val);

const createMediaQuery = function createMediaQuery(n, breakpoints) {
  const grid = {
    'xs-only': '@media (min-width: '.concat(breakpoints[0] - 1, 'px)'),
    ix: '@media (min-width: '.concat(breakpoints[0], 'px)'),
    'ix-only': '@media (max-width: '.concat(breakpoints[1] - 1, 'px)'),
    md: '@media (min-width: '.concat(breakpoints[1], 'px)'),
    'md-only': '@media (max-width: '.concat(breakpoints[2] - 1, 'px)'),
    lg: '@media (min-width: '.concat(breakpoints[2], 'px)'),
    'lg-only': '@media (max-width: '.concat(breakpoints[3] - 1, 'px)'),
    xl: '@media (min-width: '.concat(breakpoints[3], 'px)'),
    'xl-only': '@media (max-width: '.concat(breakpoints[4] - 1, 'px)'),
    xxl: '@media (min-width: '.concat(breakpoints[4], 'px)')
  };

  if (isNumber(n)) {
    return '@media (min-width: '.concat(px(n), ')');
  }

  return grid[n] || '@media (min-width: '.concat(n, ')');
};
const responsive = input => {
  return props => {
    const rules = typeof input === 'function' ? input(props) : input;
    var queryBuilder = createMediaQuery;
    let result = [];
    for (const rule in rules) {
      if ({}.hasOwnProperty.call(rules, rule)) {
        result.push(
          '\n        '
            .concat(queryBuilder(rule, theme.breakpoints), ' {\n          ')
            .concat(rules[rule], '\n        }\n      ')
        );
      }
    }
    return result.join('\n');
  };
};

export { createMediaQuery, isNumber, px, responsive };
