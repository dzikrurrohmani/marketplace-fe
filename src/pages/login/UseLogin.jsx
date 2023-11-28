import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../shared/hook/UseAuth';
// import Swal from 'sweetalert2';
import useViewState from '../../shared/hook/UseViewState';

const UseLogin = () => {
  const navigate = useNavigate();
  const { onLogin } = useAuth();
  const { viewState, setLoading, setData, setError } = useViewState();

  useEffect(() => {
    setData({
      username: '',
      password: '',
    });
  }, []);

  const onChange = (e) => {
    viewState.data[e.target.name] = e.target.value;
    setData(viewState.data);
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      await onLogin(viewState.data.username, viewState.data.password);
    } catch (error) {
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: error.response.data.msg,
      // });
    } finally {
      setLoading(false);
    }
  };

  return {
    viewState,
    onChange,
    onSubmit,
  };
};

export default UseLogin;
