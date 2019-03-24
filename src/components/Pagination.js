import React from 'react';
import ReactPaginate from 'react-paginate';

import { Pagination } from '../modules/styled/Home';

const PaginationComponent = ({ pageCount, handlePageChange }) => {
  return (
    <Pagination>
      <ReactPaginate
        previousLabel={'< previous page'}
        nextLabel={'next page >'}
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </Pagination>
  );
};

export default PaginationComponent;
