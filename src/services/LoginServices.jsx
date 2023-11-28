const LoginServices = ({ doPost }) => {
  const doLogin = async (data) => {
    try {
      return await doPost({
        url: `/login`,
        data: data,
      });
    } catch (e) {
      throw e;
    }
  };

  return {
    doLogin,
  };
};

export default LoginServices;
