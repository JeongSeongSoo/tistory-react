# 프뚜의 REACT 강좌

## 프로젝트 생성하기

```
npx create-react-app tistory-react
```

## Prettier

https://ssjeong.tistory.com/entry/Vue-%EC%9D%B8%ED%85%94%EB%A6%AC%EC%A0%9C%EC%9D%B4%EC%97%90%EC%84%9C-VUE-Prettier-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0

https://ssjeong.tistory.com/entry/VUE-Vue-Prettier-%EC%84%B8%ED%8C%85-%EB%B0%8F-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0

```
yarn add prettier
```

./tistory-react/.prettierrc 생성

```
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 100,
  "arrowParens": "always",
  "bracketSpacing": true,
  "jsxBracketSameLine": true
}
```

## IE11 호환

https://ssjeong.tistory.com/entry/POLYFILL-%EB%A6%AC%EC%95%A1%ED%8A%B8-IE11%EC%97%90%EC%84%9C-%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0

```
yarn add react-app-polyfill
```

./package.json

```
{
  ...
  "browserslist": {
    ...
    "development": [
      "ie 11",
      ...
    ],
	...
  },
  ...
}
```

./src/index.js

```
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
...
```

## Router

https://ssjeong.tistory.com/entry/react-router-dom-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%84%B8%ED%8C%85

```
yarn add react-router-dom
```

## Recoil

https://ssjeong.tistory.com/entry/React-Recoil-%EB%A6%AC%EC%95%A1%ED%8A%B8-Recoil-%EC%84%B8%ED%8C%85-%EB%B0%8F-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC

```
yarn add recoil
```

## axios

https://ssjeong.tistory.com/entry/Axios-React-Axios-%EC%84%A4%EC%A0%95-%EB%B0%8F-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

```
yarn add axios
```