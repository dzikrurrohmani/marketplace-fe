import './App.css';
import AppRouter from './navigation/AppRouter';
import ServiceFactory from './services/ServiceFactory';
import apiClientFactory from './shared/api/ApiClientFactory';
import axiosClient from './shared/api/AxiosClient';
import { DependencyProvider } from './shared/context/DependencyContext';
import { AuthProvider } from './shared/context/AuthContext';

const apiClient = apiClientFactory(axiosClient);
const services = ServiceFactory(apiClient);

const App = () => {
  return (
    <DependencyProvider services={services}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </DependencyProvider>
  );
};

export default App;
