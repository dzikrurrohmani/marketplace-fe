import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDependency } from '../hook/UseDependency';
import { useLocalStorage } from '../hook/UseLocalStorage';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [_, setToken] = useLocalStorage('token', null);
  const [user, setUser] = useLocalStorage('user', null);
  const { LoginServices } = useDependency();

  const onLogin = async (username, password) => {
    try {
      const response = await LoginServices.doLogin({
        userName: username,
        userPassword: password,
      });
      if (response) {
        setToken(response.data.token);
        setUser(JSON.stringify(response.data.user));
        navigate('/dashboard', { replace: true });
      }
    } catch (e) {
      throw e;
    }
  };

  const onLogout = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setToken(null);
        setUser(null);
        navigate('/', { replace: true });
        resolve;
      }, 200);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        onLogin,
        onLogout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
