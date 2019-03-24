const pageCount = (selection, product) =>
  selection && selection.itemPerPage
    ? Math.ceil(product.data.length / selection.itemPerPage)
    : 0;
const currentProducts = (product, selection) => {
  return (
    product &&
    product.data.slice(
      selection.currentPage * selection.itemPerPage,
      Number(selection.currentPage * selection.itemPerPage) +
        Number(selection.itemPerPage)
    )
  );
};

export { currentProducts, pageCount };
