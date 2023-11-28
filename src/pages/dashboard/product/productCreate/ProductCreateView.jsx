import AppButton from '../../../../shared/components/button/AppButton';
import './ProductCreateView.css';
import UseProductCreate from './UseProductCreate';

const ProductCreateView = () => {
  const { productList, newProduct, onChangeManualInsert, categoryList } =
    UseProductCreate();
  return (
    <div className="product-create-container">
      <div className="product-create-add">
        <div className="product-create-title">Buat Produk Baru</div>
        <div className="product-create-add-method-choice file">--- FILE</div>

        <div className="product-create-add-form">
          <div className="product-create-add-form-label">
            <div className="product-create-add-ket">File format csv</div>
            <div className="product-create-add-dd">:</div>
          </div>
          <input
            type="file"
            id="productName"
            name="productName"
            className="product-create-add-input file"
            // value={}
            // onChange={onChange}
          ></input>
        </div>
        <div className="product-create-add-method-choice manual">
          --- MANUAL
        </div>
        <div className="product-create-add-form">
          <div className="product-create-add-form-label">
            <div className="product-create-add-ket">Nama Produk</div>
            <div className="product-create-add-dd">:</div>
          </div>
          <input
            id="productName"
            name="productName"
            className="product-create-add-input text"
            placeholder="Masukkan nama produk (contoh: besi)"
            value={newProduct.productName}
            onChange={onChangeManualInsert}
          ></input>
        </div>
        <div className="product-create-add-form">
          <div className="product-create-add-form-label">
            <div className="product-create-add-ket">Harga Cash</div>
            <div className="product-create-add-dd">:</div>
          </div>
          Rp.&nbsp;&nbsp;
          <input
            type="number"
            id="productCashPrice"
            name="productCashPrice"
            className="product-create-add-input number"
            placeholder="0"
            value={productList.productCashPrice}
            onChange={onChangeManualInsert}
          ></input>
        </div>
        <div className="product-create-add-form">
          <div className="product-create-add-form-label">
            <div className="product-create-add-ket">Harga Kredit</div>
            <div className="product-create-add-dd">:</div>
          </div>
          Rp.&nbsp;&nbsp;
          <input
            type="number"
            id="productDebtPrice"
            name="productDebtPrice"
            className="product-create-add-input number"
            placeholder="0"
            value={newProduct.productDebtPrice}
            onChange={onChangeManualInsert}
          ></input>
        </div>
        <div className="product-create-add-form">
          <div className="product-create-add-form-label">
            <div className="product-create-add-ket">Stok Produk</div>
            <div className="product-create-add-dd">:</div>
          </div>
          <input
            type="number"
            id="productStock"
            name="productStock"
            className="product-create-add-input stok"
            placeholder="0"
            value={newProduct.productStock}
            onChange={onChangeManualInsert}
          ></input>
          &nbsp;&nbsp;buah
        </div>
        <div className="product-create-add-form">
          <div className="product-create-add-form-label">
            <div className="product-create-add-ket">Kategori Produk</div>
            <div className="product-create-add-dd">:</div>
          </div>
          {/* <input
            id="categoryId"
            name="categoryId"
            className="product-create-add-input text"
            placeholder="Masukkan nama produk (contoh: besi)"
            value={newProduct.categoryId}
            onChange={onChangeManualInsert}
          ></input> */}
          <select
            className="product-create-add-input select"
            // onChange={handleSelectChange}
            id="merchant_code"
            name="merchant_code"
          >
            <option value="">Pilih Kategori</option>
            {categoryList.length === 0 &&
              categoryList.map((item, index) => (
                <option key={item.id} value={item.merchant_code}>
                  {item.merchant_name}
                </option>
              ))}
            <option value="">Lainnya</option>
          </select>
        </div>
        <AppButton onClick={null} className="product-create-add-button submit">
          TAMBAH
        </AppButton>
        <AppButton onClick={null} className="product-create-add-button cancel">
          HAPUS
        </AppButton>
      </div>
      <div className="product-create-summary">
        <div className="product-create-title">Ringkasan Produk Baru</div>
        <div className="product-create-summary-insert">
          {productList.map((p, i) => {
            return (
              <div className="product-create-summary-insert-list">
                <div className="product-create-summary-list-content index">
                  {i + 1}.
                </div>
                <div className="product-create-summary-list-content name">
                  <div className="product-create-summary-list-name">
                    {p.productName}
                  </div>
                  <div className="product-create-summary-list-category">
                    kategori: {p.productCategory.categoryName}
                  </div>
                </div>
                <div className="">{p.productQty}</div>
                <div className="product-create-summary-list-separator" />
                <div className="product-create-summary-list-content price">
                  <div>Rp. {p.productCashPrice} (harga lunas)</div>
                  <div>Rp. {p.productDebtPrice} (harga hutang)</div>
                </div>
                <div className="product-create-summary-list-separator" />
                <div className="product-create-summary-list-final-price">
                  stok: {p.productStock}
                </div>
              </div>
            );
          })}
        </div>
        <div className="product-create-summary-buttons">
          <div className="product-create-summary-save-button">BUAT</div>
          <div className="product-create-summary-cancel-button">BATAL</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreateView;
