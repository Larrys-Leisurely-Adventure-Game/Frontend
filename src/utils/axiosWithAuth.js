import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    },
    baseURL: `${process.env.REACT_APP_BASE_URL}`
  });
};

export default axiosWithAuth;
