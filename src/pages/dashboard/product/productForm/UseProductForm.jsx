import React from 'react'
import useViewState from '../../../shared/hook/UseViewState'

const useTransactionForm = () => {
  const {viewState, setLoading, setData, setError} = useViewState()
  return {
    viewState
  }
}

export default useTransactionForm