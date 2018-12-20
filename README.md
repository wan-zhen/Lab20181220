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