import React from 'react';
import PropTypes from 'prop-types';
import NumberPerPage from './NumberPerPage';
import { Summary, SummaryItem, ProductCount } from '../modules/styled/Home';

const SummaryComponent = ({ handleSelect, items, total }) => {
  return (
    <Summary>
      <SummaryItem>
        <ProductCount>{total} Products</ProductCount>
      </SummaryItem>
      <SummaryItem>
        <NumberPerPage
          handleSelect={handleSelect}
          dataTestid="DisplayNumberSelect"
          items={items}
        />
      </SummaryItem>
    </Summary>
  );
};

SummaryComponent.propTypes = {
  total: PropTypes.number,
  items: PropTypes.array,
  handleSelect: PropTypes.func
};

export default SummaryComponent;
