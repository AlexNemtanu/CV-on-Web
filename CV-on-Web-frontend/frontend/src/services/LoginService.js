import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/v1';

const LoginService = {
  loginUser: (username, passwordUser) => {
    const loginData = { username, passwordUser };
    return axios.post(`${BASE_API_URL}/login`, loginData);
  },
};

export default LoginService;
