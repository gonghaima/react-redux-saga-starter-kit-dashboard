import React from 'react';
import { DisplayNumberSelect } from '../modules/styled/Home';

export default ({ handleSelect, items, dataTestid }) => (
  <DisplayNumberSelect
    onChange={handleSelect}
    items={items}
    data-testid={dataTestid}
  >
    {items.map(val => (
      <option key={val} value={val}>
        {val} per page
      </option>
    ))}
  </DisplayNumberSelect>
);
