import './ProductFormView.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppButton from '../../../../shared/components/button/AppButton';

const ProductFormView = () => {
  return (
    <div style={{ margin: '0px 35px', fontFamily: 'Poppins-Regular' }}>
      <div className="app-heading">Buat Transaksi</div>
      <div className="table-responsive">
        <div className="new-box">
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
    </div>
  );
};

export default ProductFormView;
