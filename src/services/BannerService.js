import Api from './Api';

export default {
  getHot() {
    return Api().get(`/api/json/get/${process.env.VUE_APP_API_ENDPOINT_HOT}`);
  },
  getNews() {
    return Api().get('/api/json/get/NynTtqEAr');
  }
};
