import React, { useState } from 'react';
import { useDependency } from '../../../../shared/hook/UseDependency';

const useTransactionView = () => {
  const { TransactionServices } = useDependency();
  const [selectStatus, setSelectStatus] = useState('');
  const [page, setPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(13);
  const [search, setSearch] = useState('');

  const filterStatus = [
    {
      id: true,
      name: 'Lunas',
    },
    {
      id: false,
      name: 'Hutang',
    },
  ];

  return {
    page,
    search,
    filterStatus,
    setSelectStatus,
    selectStatus,
    setSearch,
  };
};

export default useTransactionView;
