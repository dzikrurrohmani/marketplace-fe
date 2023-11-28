import LoginServices from './LoginServices';
import ProductServices from './ProductServices';
import TransactionServices from './TransactionServices';

const ServiceFactory = (apiClient) => {
  return {
    LoginServices: LoginServices(apiClient),
    ProductServices: ProductServices(apiClient),
    TransactionServices: TransactionServices(apiClient),
  };
};

export default ServiceFactory;
