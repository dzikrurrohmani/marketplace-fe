import './TransactionFormView.css';
import AppButton from '../../../../shared/components/button/AppButton';
import useTransactionForm from './UseTransactionForm';
import AppModal from '../../../../shared/components/modal/AppModal';

const TransactionFormView = () => {
  const { addProduct, handleClickAddProduct, isMount } = useTransactionForm();
  return (
    <>
      {isMount && <AppModal visible={addProduct} onHide={()=> handleClickAddProduct(false)}></AppModal>}
      <div style={{ margin: '0px 35px', fontFamily: 'Poppins-Regular' }}>
        <div className="trans-create-title">Buat Transaksi</div>
        <div className="trans-create-body">
          <div className="trans-create-container">
            <div className="trans-create-content">
              <div className="trans-create-text">Nama Pembeli</div>
              <div className="trans-create-separator">:</div>
              <input
                aria-label="username-input"
                spellCheck={false}
                autoComplete="off"
                id="username"
                name="username"
                className="trans-create-input"
                placeholder="Bp/Ibu xxxxxxxxxxxx"
                // value={viewState.data === null ? '' : viewState.data.username}
                // onChange={onChange}
              ></input>
            </div>
            <div className="trans-create-content">
              <div className="trans-create-text">Tanggal</div>
              <div className="trans-create-separator">:</div>
              <input
                aria-label="username-input"
                spellCheck={false}
                autoComplete="off"
                id="username"
                name="username"
                className="trans-create-input"
                placeholder="Bp/Ibu xxxxxxxxxxxx"
                // value={viewState.data === null ? '' : viewState.data.username}
                // onChange={onChange}
              ></input>
            </div>
          </div>
          <div className="trans-create-container">
            <div className="trans-create-content">
              <div className="trans-create-text">No Telepon</div>
              <div className="trans-create-separator">:</div>
              <input
                aria-label="username-input"
                spellCheck={false}
                autoComplete="off"
                id="username"
                name="username"
                className="trans-create-input"
                placeholder="Bp/Ibu xxxxxxxxxxxx"
                // value={viewState.data === null ? '' : viewState.data.username}
                // onChange={onChange}
              ></input>
            </div>
            <div className="trans-create-content">
              <div className="trans-create-text">Metode</div>
              <div className="trans-create-separator">:</div>
              <input
                aria-label="username-input"
                spellCheck={false}
                autoComplete="off"
                id="username"
                name="username"
                className="trans-create-input"
                placeholder="Bp/Ibu xxxxxxxxxxxx"
                // value={viewState.data === null ? '' : viewState.data.username}
                // onChange={onChange}
              ></input>
            </div>
          </div>
        </div>
        <div className="trans-create-list">
          <div className="trans-create-list-text">Daftar Pembelian :</div>
          <input
            aria-label="username-input"
            spellCheck={false}
            autoComplete="off"
            id="username"
            name="username"
            className="trans-create-list-input"
            placeholder="Bp/Ibu xxxxxxxxxxxx"
            // value={viewState.data === null ? '' : viewState.data.username}
            // onChange={onChange}
          ></input>
          <button
            onClick={()=> handleClickAddProduct(true)}
            className="btn btn-plus"
          >
            <i
              className="fa-solid fa-circle-plus"
              style={{ marginRight: '10px' }}
            />
            Buat Transaksi
          </button>
        </div>
        <div className="trans-create-footer">
          <AppButton onClick={null} className="trans-create-button-submit">
            Batal
          </AppButton>
          <AppButton onClick={null} className="trans-create-button-submit">
            Simpan
          </AppButton>
        </div>
      </div>
    </>
  );
};

export default TransactionFormView;
