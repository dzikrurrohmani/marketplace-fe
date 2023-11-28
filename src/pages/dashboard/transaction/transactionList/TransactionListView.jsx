import './TransactionListView.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { transaksi } from '../../../../shared/data';
import { useState } from 'react';
import useTransactionView from './UseTransactionList';
import TransactionFormView from '../transactionForm/TransactionFormView';

const TransactionListView = () => {
  const navigate = useNavigate();
  const { filterStatus, setSelectStatus, selectStatus, page, search, setSearch } = useTransactionView();
  return (
    <div style={{ margin: '0px 35px', fontFamily: 'Poppins-Regular' }}>
      <div className="app-heading">Daftar Transaksi</div>
      <div className="table-responsive">
        <div
          className="d-flex  justify-content-sm-between gap-2"
          style={{ marginBottom: '15px', fontSize: '11px', minWidth: '880px' }}
        >
          <button
            onClick={() => {
              navigate('/dashboard/transaction/create');
            }}
            className="btn btn-plus"
          >
            <i
              className="fa-solid fa-circle-plus"
              style={{ marginRight: '10px' }}
            />
            Buat Transaksi
          </button>
          <input
            type="text"
            className="form-control"
            id="searchUserName"
            placeholder="Cari berdasarkan kode/pembeli"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '282px', marginLeft: 'auto' }}
          />
          <select
            className="form-select"
            style={{ width: '110px' }}
            onChange={(e) => setSelectStatus(e.target.value)}
            id="status"
            name="status"
            data-testid="filter-status"
            required
          >
            <option value="">Status</option>
            {filterStatus.length === 0 ? (
              <option></option>
            ) : (
              filterStatus.map((item) => (
                <option className="text-[14px]" key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))
            )}
          </select>
          <button
            onClick={() => {
              navigate('/home/user-list/add-user');
            }}
            className="btn btn-plus"
          >
            <i className="fa-solid fa-search" />
          </button>
        </div>
        <div className="text-center" style={{ minWidth: '880px' }}>
          <table className="table table-striped border-start border-end">
            <thead
              className="table-group-divider"
              style={{ fontFamily: 'Poppins-Bold' }}
            >
              <tr>
                <th>Kode</th>
                <th>Tanggal</th>
                <th>Pembeli</th>
                <th>Metode</th>
                <th>Status</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {transaksi.map((trx) => {
                return (
                  <tr key={trx.transactionCode}>
                    <td>{trx.transactionCode}</td>
                    <td>
                      {new Date(trx.transactionDate).toLocaleDateString()}
                    </td>
                    <td>{trx.customerIdentitiy}</td>
                    <td>{trx.isCash ? 'Tunai' : 'Kredit'}</td>
                    <td>{trx.isPaid ? 'Lunas' : 'Hutang'}</td>
                    <td>{trx.grandTotal}</td>
                    <td>
                      <Link
                        className="detail text-white"
                        to={'/home/ticket-detail'}
                        state={{
                          ticketId: 'ticket.ticketId',
                          origin: 'assigned-to-me',
                        }}
                      >
                        <button className="btn btn-outline-secondary btn-sm">
                          Detail
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {false && (
              <tbody className="table-group-divider">
                <tr>
                  <td className="fw-bold text-center p-3">
                    {`Ticket with number or title "${'searchTicket'}" is not found`}
                  </td>
                </tr>
              </tbody>
            )}
            <tbody>
              <tr className="table-group-divider" />
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <ul className="pagination">
          {page !== 1 && (
            <li
              className="page-item"
              onClick={() => handleChangePageAllTicket('prev')}
            >
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
          )}
          <li className="page-item disabled">
            <a className="page-link" href="#">
              {page}
            </a>
          </li>
          {transaksi.length >= 10 && (
            <li
              className="page-item"
              onClick={() => handleChangePageAllTicket('next')}
            >
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true" style={{ color: '#6c757d' }}>
                  &raquo;
                </span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TransactionListView;
