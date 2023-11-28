import axios from 'axios';
import { authHeaderInterceptor } from './AuthHeaderInterceptor';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_BASE_URL,
});

axiosClient.interceptors.request.use(authHeaderInterceptor);

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      
      // let user = window.localStorage.getItem('user');
      // let refreshToken = window.localStorage.getItem('refreshToken');
      // try {
      //   const refresh = await axiosClient.post('/login/refresh', {
      //     userEmail: JSON.parse(user).userEmail,
      //     refreshToken: refreshToken,
      //   });

      //   if (refresh.data.status === 'SUCCESS') {
      //     window.localStorage.setItem('token', refresh.data.loginAsUser.token);
      //     window.localStorage.setItem(
      //       'refreshToken',
      //       refresh.data.loginAsUser.refreshToken
      //     );
      //   }
      // } catch (e) {
      //   console.log('Interceptors 401 Error:', e);
      // }
      console.log("NOT AUTH");
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
