import './LoginView.css';
import UseLogin from './UseLogin';
import AppLogin from '../../assets/AppLogin.svg';
import AppLoading from '../../shared/components/loading/AppLoading';
import AppButton from '../../shared/components/button/AppButton';

const LoginView = () => {
  const { viewState, onChange, onSubmit } = UseLogin();
  return (
    <div className="body">
      <div className="body-container">
        <img
          className="ilustration"
          src={AppLogin}
          alt={'logo'}
          draggable="false"
          height={250}
        ></img>
        <div className="form-container">
          <h1 className="text1">Selamat datang di Aplikasi Kasir</h1>
          <h1 className="text2">TB Bima</h1>
          <input
            aria-label="username-input"
            spellCheck={false}
            autoComplete="off"
            id="username"
            name="username"
            className="input-custom mb-3"
            placeholder="Masukkan Username Anda"
            value={viewState.data === null ? '' : viewState.data.username}
            onChange={onChange}
          ></input>
          <input
            aria-label="password-input"
            spellCheck={false}
            autoComplete="off"
            id="password"
            name="password"
            type="password"
            className="input-custom mb-3"
            placeholder="Masukkan Password Anda"
            value={viewState.data === null ? '' : viewState.data.password}
            onChange={onChange}
          ></input>
          <AppButton onClick={onSubmit} className="btn-custom">
            <h1 className="text3">Masuk</h1>
          </AppButton>
        </div>
      </div>
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      {viewState.isLoading && <AppLoading />}
    </div>
  );
};

export default LoginView;
