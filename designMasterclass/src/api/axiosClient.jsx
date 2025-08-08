import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {  
    'Accept': 'application/json',
            'Content-type': 'application/json',

  },
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const raw = localStorage.getItem("designMasterclass");
    let data;

    try {
      data = JSON.parse(raw || '{}');

      if (typeof data === 'string') {
        data = { token: data };
      }
    } catch {
      data = { token: raw };
    }

    const token = data.token;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
        console.error(error.response);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;