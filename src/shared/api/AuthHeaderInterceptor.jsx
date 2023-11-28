export const authHeaderInterceptor = (config) => {
  const token = window.localStorage.getItem('token');
  config.headers.Authorization = token;
  return config;
};
