import AppNavigation from './AppNavigation';
import ExposedPage from './ExposedPage';
import NotFoundView from '../pages/shared/NotFoundView';
import ProtectedPage from './ProtectedPage';
import TransactionListView from '../pages/dashboard/transaction/transactionList/TransactionListView';
import { Route, Routes } from 'react-router-dom';
import ProductListView from '../pages/dashboard/product/productList/ProductListView';
import AnalyticPageView from '../pages/dashboard/analytic/AnalyticPageView';
import TransactionCreateView from '../pages/dashboard/transaction/transactionCreate/TransactionCreateView';
import ProductCreateView from '../pages/dashboard/product/productCreate/ProductCreateView';

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<ExposedPage />} />
      <Route element={<ProtectedPage />}>
        <Route path="dashboard" element={<AppNavigation />}>
          <Route index element={<AnalyticPageView />} />
          <Route path="product" element={<ProductListView />} />
          <Route path="product/create" element={<ProductCreateView />} />
          <Route path="transaction" element={<TransactionListView />} />
          <Route path="transaction/create" element={<TransactionCreateView />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

export default AppRouter;
