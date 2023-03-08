# ncl-attractions-fe

## How to run

```
npm install
npm start
```

## Coding standard

* Use 2 spaces instead of tab
* The first letter of the component file name must be capitalized
* Use single quotes for strings. "some string" -> 'some string'
* Each sentence must end with a semicolon

## Tree

```
├── README.md
├── package-lock.json (dependency version controller)
├── package.json (dependency configuration)
├── public  (Static files, which will deploy on the server in the end.)
└── src
    ├── components
    │   ├── Detail (The detail page of the place)
    │   │   └── Index.js
    │   ├── Home (Home page)
    │   │   └── Index.js
    │   └── Result (Result Page, including List component and Map component)
    │       ├── Index.js
    │       ├── List.js
    │       └── Map.js
    ├── index.js (The entrance file)
    ├── reportWebVitals.js
    └── setupTests.js
```