import { useState } from 'react';
import { useDependency } from '../../../../shared/hook/UseDependency';

const UseProductCreate = () => {
  const { ProductServices } = useDependency();
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productName: '',
    productCashPrice: 0,
    productDebtPrice: 0,
    productStock: 0,
    categoryId: '',
  });

  const handleInsertProductList = () => {
    
  }

  const onChangeManualInsert = (e) => {
    newProduct[e.target.name] = e.target.value;
    setNewProduct({ ...newProduct });
  };

  const onGetCategoryList = async () => {
    try {
      const response = await CategoryServices.getAllCategory();
      setCategoryList(response.data);
    } catch (error) {
      throw error;
    }
  };

  return {
    productList,
    newProduct,
    onChangeManualInsert,
    categoryList,
  };
};

export default UseProductCreate;
