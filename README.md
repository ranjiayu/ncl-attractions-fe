# ncl-attractions-fe

## React learning

[https://beta.reactjs.org](https://beta.reactjs.org/)

## How to run

```
npm install
npm start
```

## Coding standard

* Use 2 spaces instead of tab
* The first letter of the component file and function name must be capitalized
* Each sentence must end with a semicolon

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