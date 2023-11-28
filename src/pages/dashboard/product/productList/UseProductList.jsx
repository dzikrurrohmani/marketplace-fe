import React, { useEffect, useState } from 'react';
import { useDependency } from '../../../../shared/hook/UseDependency';

const useTransactionView = () => {
  const [selectStatus, setSelectStatus] = useState('');
  const [page, setPage] = useState(1);
  const [productList, setProductList] = useState([]);
  const { ProductServices } = useDependency();

  const filterStatus = [
    {
      id: true,
      name: 'Sudah Lunas',
    },
    {
      id: false,
      name: 'Belum Lunas',
    },
  ];

  const onGetAllProduct = async () => {
    // setLoading(true);
    console.log('LO1');
    try {
      console.log('LO2');
      const response = await ProductServices.getAllProduct(page, 12);
      setProductList(response.data);
    } catch (error) {
      console.log(error);
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: error.response.data.msg,
      // });
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    onGetAllProduct();
  }, [page]);

  return {
    filterStatus,
    setSelectStatus,
    selectStatus,
    page,
    setPage,
    productList,
  };
};

export default useTransactionView;
