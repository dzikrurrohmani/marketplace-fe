import { useState } from 'react';
import { useDependency } from '../../../../shared/hook/UseDependency';

const UseAnalyticPage = () => {
  const { ProductServices, TransactionServices } = useDependency();
  const [productList, setProductList] = useState([]);

  const onGetProductList = async () => {
    try {
      const response = await ProductServices.getAllProduct();
      setProductList(response.data);
    } catch (error) {
      throw error;
    }
  };

  return {
    productList,
    onGetProductList,
  };
};

export default UseAnalyticPage;
