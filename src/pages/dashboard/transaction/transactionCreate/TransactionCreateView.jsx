import { bill, produk } from '../../../../shared/data';
import './TransactionCreateView.css';

const TransactionCreateView = () => {
  return (
    <div className="trans-create-container">
      <div className="trans-create-product">
        <input
          className="trans-create-product-search"
          placeholder="Cari berdasarkan kode atau nama"
        ></input>
        <div className="trans-create-product-list">
          {produk.map((p) => {
            return (
              <div className="trans-create-product-card">
                {p.productName}
                <div className="trans-create-product-stock">
                  Produk tersisa : {p.productStock}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="trans-create-summary">
        <div className="trans-create-summary-title">Ringkasan Pesanan</div>
        <div className="trans-create-summary-bills">
          {bill.map((p) => {
            return (
              <div className="trans-create-summary-list">
                <div className="trans-create-summary-list-content">
                  <div>{p.productName}</div>
                  <div className="trans-create-summary-list-base-price">
                    Rp. {p.productPrice}
                  </div>
                </div>
                <div className="">x {p.productQty}</div>
                <div className="trans-create-summary-list-separator" />
                <div className="trans-create-summary-list-final-price">
                  Rp. {p.productQty * p.productPrice}
                </div>
                <div className="trans-create-summary-list-separator" />
                <div className="trans-create-summary-list-delete">
                  <i class="fa-solid fa-trash"></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="trans-create-summary-buttons">
          <div className="trans-create-summary-save-button">BUAT</div>
          <div className="trans-create-summary-cancel-button">BATAL</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCreateView;
