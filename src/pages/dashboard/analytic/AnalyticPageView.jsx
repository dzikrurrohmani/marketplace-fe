import './AnalyticPageView.css';
import AppAnalytic from '../../../assets/AppAnalytic.svg';
import React from 'react';
import { transaksi } from '../../../shared/data';
import { Link } from 'react-router-dom';
import AppButton from '../../../shared/components/button/AppButton';

const AnalyticPageView = () => {
  const trxCard = (trx) => {
    return (
      <div
        key={trx.transactionCode}
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '30px',
          padding: '7px 15px',
          backgroundColor: '#a4c4cf30',
          boxShadow: '0 0 5px 5px #9bcedf',
          borderRadius: '15px',
          margin: '5px 0px',
        }}
      >
        <div>{trx.transactionCode}</div>
        <div style={{ fontFamily: 'Poppins-Bold' }}>
          {trx.customerIdentitiy}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginLeft: 'auto',
          }}
        >
          <div>Rp{trx.grandTotal}</div>
          <div style={{ color: trx.isPaid ? 'green' : 'red' }}>
            {trx.isPaid ? 'Tunai' : 'Hutang'}
          </div>
        </div>
      </div>
    );
  };

  const popularProductCard = (product) => {
    return (
      <div
        key={product.transactionCode}
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '30px',
          padding: '7px 15px',
          backgroundColor: '#a4c4cf30',
          boxShadow: '0 0 5px 5px #9bcedf',
          borderRadius: '15px',
          margin: '5px 0px',
        }}
      >
        <div>{product.transactionCode}</div>
        <div style={{ fontFamily: 'Poppins-Bold' }}>
          {product.customerIdentitiy}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginLeft: 'auto',
          }}
        >
          <div>Rp{product.grandTotal}</div>
          <div style={{ color: product.isPaid ? 'green' : 'red' }}>
            {product.isPaid ? 'Tunai' : 'Hutang'}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="table-responsive">
      <div
        style={{
          margin: '0px 35px',
          fontFamily: 'Poppins-Regular',
          minWidth: '1700px',
        }}
      >
        <div className="d-flex gap-5 justify-content-sm-between">
          <div className="summary-box">
            <div className="count">
              <h5 style={{ letterSpacing: '2px' }}>Pendapatan hari ini</h5>
              <h1
                style={{
                  fontFamily: 'Poppins-Bold',
                  letterSpacing: '3px',
                  fontSize: '60px',
                }}
              >
                Rp 12.356.500
              </h1>
              <div className="d-flex gap-3" style={{ marginTop: 'auto' }}>
                <i
                  className="fa-solid fa-people-group"
                  style={{
                    fontSize: '50px',
                    width: '60px',
                    textAlign: 'center',
                  }}
                ></i>
                <div>
                  <h6 style={{ letterSpacing: '1px', marginTop: 'auto' }}>
                    Jumlah pembeli
                  </h6>
                  <h4
                    style={{ fontFamily: 'Poppins-Bold', letterSpacing: '2px' }}
                  >
                    51
                  </h4>
                </div>
              </div>
              <div className="d-flex gap-3">
                <i
                  className="fa-solid fa-money-bill-trend-up"
                  style={{
                    fontSize: '50px',
                    width: '60px',
                    textAlign: 'center',
                  }}
                ></i>
                <div>
                  <h6 style={{ letterSpacing: '1px' }}>Produk terjual</h6>
                  <h4
                    style={{ fontFamily: 'Poppins-Bold', letterSpacing: '2px' }}
                  >
                    356
                  </h4>
                </div>
              </div>
            </div>
            <img
              className="summary-illustration"
              src={AppAnalytic}
              alt={'logo'}
              draggable="false"
            ></img>
          </div>
          <div className="instant-trx-box">
            <h5
              style={{
                letterSpacing: '2px',
                marginBottom: '30px',
              }}
            >
              Form Transaksi Cepat
            </h5>
            <h6 style={{ letterSpacing: '1px', fontSize: '13px' }}>
              Nama Pembeli:
            </h6>
            <input
              aria-label="username-input"
              spellCheck={false}
              autoComplete="off"
              id="username"
              name="username"
              className="input-custom mb-3"
              placeholder="Bp/Ibu xxxxxxxxxxxx"
              // value={viewState.data === null ? '' : viewState.data.username}
              // onChange={onChange}
            ></input>
            <h6 style={{ letterSpacing: '1px', fontSize: '13px' }}>
              No Telepon (Opsional):
            </h6>
            <input
              aria-label="password-input"
              spellCheck={false}
              autoComplete="off"
              id="password"
              name="password"
              type="password"
              className="input-custom mb-3"
              placeholder="08xxxxxxxxxx"
              // value={viewState.data === null ? '' : viewState.data.password}
              // onChange={onChange}
            ></input>
            <AppButton onClick={null} className="btn-custom btn-create">
              <h1 className="text3">Buat Transaksi</h1>
            </AppButton>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
                flex: '1 auto',
                alignItems: 'center',
            }}
          >
            <div
              className="app-heading"
              style={{ fontSize: '23px', marginTop: '-15px' }}
            >
              Transaksi Terakhir
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: '15px',
                width: '100%',
                gap: '40px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: '1',
                  flexDirection: 'column',
                }}
              >
                {transaksi.slice(0, 4).map((trx) => {
                  return trxCard(trx);
                })}
              </div>
              {transaksi.slice(4, 8).length !== 0 && (
                <div
                  style={{
                    display: 'flex',
                    flex: '1',
                    flexDirection: 'column',
                  }}
                >
                  {transaksi.slice(4, 8).map((trx) => {
                    return trxCard(trx);
                  })}
                </div>
              )}
            </div>

            <Link style={{ color: 'black', textDecoration: 'none' }}>
              Lihat semua transaksi &raquo;
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
                flex: '1 auto',
                alignItems: 'center',
            }}
          >
            <div
              className="app-heading"
              style={{ fontSize: '23px', marginTop: '-15px' }}
            >
              Produk Paling Laris
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: '15px',
                width: '100%',
                gap: '20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: '1',
                  flexDirection: 'column',
                }}
              >
                {transaksi.slice(0, 4).map((trx) => {
                  return popularProductCard(trx);
                })}
              </div>
            </div>

            <Link style={{ color: 'black', textDecoration: 'none' }}>
              Lihat semua produk &raquo;
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
                flex: '1 auto',
                alignItems: 'center',
            }}
          >
            <div
              className="app-heading"
              style={{ fontSize: '23px', marginTop: '-15px' }}
            >
              Produk Stok Menipis
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: '15px',
                width: '100%',
                gap: '20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: '1',
                  flexDirection: 'column',
                }}
              >
                {transaksi.slice(0, 4).map((trx) => {
                  return popularProductCard(trx);
                })}
              </div>
            </div>

            <Link style={{ color: 'black', textDecoration: 'none' }}>
              Lihat semua produk &raquo;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticPageView;
