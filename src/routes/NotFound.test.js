import React from 'react';
import { NotFound } from './NotFound';
import { shallow, render, mount } from 'enzyme';

describe('NotFound page', () => {
  it('should render all expected components', () => {
    const component = shallow(<NotFound />);
    expect(component).toMatchSnapshot();
  });
});
