import './AppNavbar.css';
import { Link } from 'react-router-dom';
import storeLogo from '../../../assets/storeLogo.svg';
import useAuth from '../../hook/UseAuth';
import { useEffect, useState } from 'react';
import useViewState from '../../hook/UseViewState';
import AppLoading from '../loading/AppLoading';
import { useLocalStorage } from '../../hook/UseLocalStorage';

const AppNavbar = ({}) => {
  const [isMobile, setIsMobile] = useState(false);
  const { onLogout } = useAuth();
  const { viewState, setData, setLoading } = useViewState();
  const [user, setUser] = useLocalStorage('user', null);

  useEffect(() => {
    setData({
      selected: 1,
    });
  }, []);

  return (
    <nav className="navbar-style">
      <a href="/dashboard">
        <img src={storeLogo} className="logo" />
      </a>
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}
      >
        <Link
          to="/dashboard"
          className={`list menu ${
            (viewState.data == null ? 1 : viewState.data.selected) == 1
              ? 'active'
              : ''
          }`}
          onClick={() => {
            viewState.data.selected = 1;
            setData(viewState.data);
          }}
        >
          <li>Beranda</li>
        </Link>
        <Link
          to="/dashboard/product"
          className={`list menu ${
            (viewState.data == null ? 1 : viewState.data.selected) == 2
              ? 'active'
              : ''
          }`}
          onClick={() => {
            viewState.data.selected = 2;
            setData(viewState.data);
          }}
        >
          <li>Produk</li>
        </Link>
        <Link
          to="/dashboard/transaction"
          className={`list menu ${
            (viewState.data == null ? 1 : viewState.data.selected) == 3
              ? 'active'
              : ''
          }`}
          onClick={() => {
            viewState.data.selected = 3;
            setData(viewState.data);
          }}
        >
          <li>Transaksi</li>
        </Link>
        {isMobile == false && (
          <Link className="list profile">
            <li>
              <div
                className=""
                onClick={async () => {
                  setLoading(true);
                  await onLogout();
                  setLoading(false);
                }}
              >
                <i
                  className="fa-solid fa-user"
                  style={{ marginRight: '10px' }}
                />
                {JSON.parse(user)?.userFullname}
              </div>
            </li>
          </Link>
        )}
        <Link className="list right">
          <li>
            <div
              className="logout"
              onClick={async () => {
                setLoading(true);
                await onLogout();
                setLoading(false);
              }}
            >
              <i className="fa-solid fa-right-to-bracket icon-rotate" />
              Keluar
            </div>
          </li>
        </Link>
      </ul>
      <button className="mobile-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className="fa fa-times" />
        ) : (
          <i className="fa fa-bars" />
        )}
      </button>
      {viewState.isLoading && <AppLoading />}
    </nav>
  );
};

export default AppNavbar;
