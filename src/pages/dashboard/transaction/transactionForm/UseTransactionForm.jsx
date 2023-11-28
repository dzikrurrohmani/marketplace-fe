import React, { useState } from 'react'

const useTransactionForm = () => {
  const [addProduct, setAddProduct] = useState(false)
  const [isMount, setIsMount] = useState(false)
  const handleClickAddProduct = (isShow) => {
    setAddProduct(isShow)
    setIsMount(true)
  }
  return {
    addProduct,
    handleClickAddProduct,
    isMount
  }
}

export default useTransactionForm