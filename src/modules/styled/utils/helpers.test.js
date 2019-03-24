import { createMediaQuery, isNumber, px, responsive } from './helpers';

describe('Styled helper until', () => {
  it('should use isNumber to decide if a val is a number', () => {
    expect(isNumber(5)).toBe(true);
    expect(isNumber('5')).toBe(false);
  });

  it('should use px to convert a number into a px number', () => {
    expect(px(5)).toBe('5px');
    expect(px('5px')).toBe('5px');
  });

  it('should use createMediaQuery to convert a settings', () => {
    const xs = createMediaQuery('xs', [400, 768, 1024, 1280, 1920]);
    const ix = createMediaQuery('ix', [400, 768, 1024, 1280, 1920]);
    const md = createMediaQuery('md', [400, 768, 1024, 1280, 1920]);
    const lg = createMediaQuery('lg', [400, 768, 1024, 1280, 1920]);
    const xl = createMediaQuery('xl', [400, 768, 1024, 1280, 1920]);
    const customNum = createMediaQuery(8888, [400, 768, 1024, 1280, 1920]);
    const xsOnly = createMediaQuery('xs-only', [400, 768, 1024, 1280, 1920]);

    expect(xs).toBe('@media (min-width: xs)');
    expect(ix).toBe('@media (min-width: 400px)');
    expect(md).toBe('@media (min-width: 768px)');
    expect(lg).toBe('@media (min-width: 1024px)');
    expect(xl).toBe('@media (min-width: 1280px)');
    expect(customNum).toBe('@media (min-width: 8888px)');
    expect(xsOnly).toBe('@media (min-width: 399px)');
  });

  it('should use responsive util to convert media query', () => {
    const input = {
      ix: `
          grid-gap: 5;
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
          grid-gap: 6;
          grid-template-columns: repeat(4, 1fr);
        `
    };

    const props = { children: [], forwardedComponent: {} };

    const result = responsive(input)(props);

    expect(result).toContain('grid-template-columns');
    expect(result.length).toBe(536);
  });

  it('should use responsive until to take function as input, to convert queryBuilder', () => {
    const funcInput = () => ['custom css', 'b', 'c'];
    const props = { children: [], forwardedComponent: {} };
    const result = responsive(funcInput)(props);
    expect(result).toContain('custom css');
    expect(result.length).toBe(194);
  });
});
