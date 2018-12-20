import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: `https://next.json-generator.com/api/json/get/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

AxiosInstance.interceptors.response.use(
  function(response) {
    if (response.data.IsSuccess) {
      return response.data;
    } else {
      return Promise.reject(response.data.ErrorMessage);
    }
  },
  function(error) {
    const errorList = [
      {
        status: 401,
        msg: 'Unauthorized',
        callback: function() {
          alert('閒置過久，請重新登入');
          // router.push('notfound');
        }
      },
      {
        status: 404,
        msg: 'Not Found',
        callback: function() {
          //alert('找不到啦');
        }
      },
      {
        status: 500,
        msg: 'Internal Server Error',
        callback: function() {
          alert('操作頻繁，請稍後嘗試');
        }
      }
    ];

    const currentError = errorList.filter(err => {
      return err.status === error.response.status;
    })[0] || {
      msg: error.response.statusText,
      callback: function() {}
    };
    currentError.callback();
    return Promise.reject(currentError.msg);
  }
);

export default () => AxiosInstance;
