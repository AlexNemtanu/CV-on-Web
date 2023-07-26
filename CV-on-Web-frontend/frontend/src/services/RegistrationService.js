import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/v1'; // Replace with your actual backend API URL

const RegistrationService = {
  registerUser: (username, passwordUser) => {
    const registrationData = { username, passwordUser };
    return axios.post(`${BASE_API_URL}/register`, registrationData);
  },
};

export default RegistrationService;
