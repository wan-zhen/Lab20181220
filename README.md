# Lab 20181220

## Install & Run

```
yarn install
npm run serve
```

## Axios

```
import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://next.json-generator.com/api/json/get/`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
```

## Modify GameGrid.vue

- this.axios > Api
- interceptors

## BannerService.js

```
import Api from './Api';

export default {
  getHot() {
    return Api().get('4JUPPpc1L');
  },
  getNews() {
    return Api().get('NynTtqEAr');
  }
};
```

## Reference

- [Environment Variables and Modes](https://cli.vuejs.org/guide/mode-and-env.html)

- [Using Axios to Consume APIs
](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html#Base-Example)

- [Axios](https://github.com/axios/axios)