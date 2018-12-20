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

## Environment Variables and Modes

.env
```
VUE_APP_I18N_LOCALE=en
VUE_APP_I18N_FALLBACK_LOCALE=en
VUE_APP_API_ENDPOINT_HOT=4JUPPpc1L
```

.env.staging
```
NODE_ENV=production
VUE_APP_API_ENDPOINT_HOT=NynTtqEAr
```

package.json
```
scripts: {
  "staging": "vue-cli-service build --mode staging"
}
```

Build and Run it - Check http://localhost:80
```
npm run staging
npm start
```

## Reference

- [Environment Variables and Modes](https://cli.vuejs.org/guide/mode-and-env.html)

- [Using Axios to Consume APIs
](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html#Base-Example)

- [Axios](https://github.com/axios/axios)