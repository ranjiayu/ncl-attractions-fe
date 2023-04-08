<!--
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:10:09
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-08 13:05:11
 * @Description: Description
-->
# ncl-attractions-fe

## React learning

[https://beta.reactjs.org](https://beta.reactjs.org/)

## How to run

```
npm install
npm start
```

## How to run test

```
npm run test
```

## File tree

```
├── README.md
├── package-lock.json
├── package.json                    (dependencies)
├── public                          (output)
└── src
    ├── api.js                      (HTTP API configuration)
    ├── components                  (Components)
    │   ├── Detail
    │   │   └── Index.js
    │   ├── Home
    │   │   └── Index.js
    │   └── Result
    │       ├── Index.js
    │       ├── List.js
    │       ├── Map.js
    │       ├── Map.test.js         (test for Map components)
    │       └── PlaceItem.js
    ├── config.js                   (google map configuration, such as API_KEY)
    ├── index.js                    (entrance)
    ├── reportWebVitals.js
    ├── setupTests.js
    └── styles                      (All CSS)
        ├── Home
        ├── Result
        └── common.css
```