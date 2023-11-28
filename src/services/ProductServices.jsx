const ProductServices = ({ doPost, doGet, doPut, doDelete }) => {
  const getAllProduct = async (page, itemPerPage) => {
    try {
      return await doGet({
        url: 'product',
        params: {
          page: page,
          limit: itemPerPage
        }
      });
    } catch (error) {
      throw error;
    }
  };

  const createProduct = async (newPost) => {
    try {
      return await doPost({
        url: 'product',
        data: newPost,
      });
    } catch (error) {
      throw error;
    }
  };

  const deleteProductById = async (productId) => {
    console.log(productId);
    try {
      return await doDelete({
        url: 'product',
        data: productId,
      });
    } catch (error) {
      throw error;
    }
  };

  return { getAllProduct, createProduct, deleteProductById };
};

export default ProductServices;
