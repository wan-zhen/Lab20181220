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

## 如果還有時間的話就講怎麼實現 .env 從專案中隔離出來


build-themes.js
```
const fs = require('fs-extra')
const path = require('path');
const request = require('request')
const { spawn } = require('child_process');

const args = Array.apply(null, process.argv);
console.log('args: ', args);
console.log('lengths: ', args.length);

let theme = 'staging';
if (args.length > 2) {
    theme = args[2];
}

const envFilePath = path.join(
    process.cwd(),
    `.env.${theme}`);

console.log('envFilePath: ', envFilePath);

// return spawn('vue-cli-service', ['build', '--mode', theme], {
//     stdio: 'inherit'
// });

let configURI = `https://raw.githubusercontent.com/l7960261/ENVLab20181220/master/.env.${theme}`

return request({
    method: 'GET',
    uri: configURI
}, (error, response, body) => {
    // console.log(body);

    return fs.writeFile(envFilePath, body)
        .then(() => spawn('vue-cli-service', ['build', '--mode', theme], {
            stdio: 'inherit'
        }));
});
```

CMD / Bash
```
npm run theme AB005-01
```