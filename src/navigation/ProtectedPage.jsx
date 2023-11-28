import { Navigate, Outlet } from 'react-router-dom';
import { useLocalStorage } from '../shared/hook/UseLocalStorage';

const ProtectedPage = () => {
  const [user,_] = useLocalStorage('user', null);
  return user!=null ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedPage;
