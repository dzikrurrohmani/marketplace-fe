import LoginView from '../pages/login/LoginView';
import { Navigate, Outlet } from 'react-router-dom';
import { useLocalStorage } from '../shared/hook/UseLocalStorage';

const ExposedPage = () => {
  const [user,_] = useLocalStorage('user', null);
  return user!=null ? <Navigate to='dashboard' replace /> : <LoginView />;
};

export default ExposedPage;
