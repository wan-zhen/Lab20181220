import Api from './Api';

export default {
  getHot() {
    return Api().get('/api/json/get/4JUPPpc1L');
  },
  getNews() {
    return Api().get('/api/json/get/NynTtqEAr');
  }
};
