# ncl-attractions-fe

## How to run

Before running this project, please run the back-end project firstly.

```
npm install
npm start
```

## How to run testing

```
npm run test
```

## Structure

```
./
├── README.md
├── package-lock.json
├── package.json                      - node package dependency
├── public                            - static files that should be deployed
└── src                               - source code
    ├── api.js
    ├── components
    │   ├── Common                    - Common components
    │   │   ├── Button.js
    │   │   ├── Button.test.js
    │   │   ├── Error.js
    │   │   ├── Error.test.js
    │   │   └── Header.js
    │   ├── Detail                    - Detail page related components
    │   │   ├── Index.js
    │   │   ├── InfoDetail.js
    │   │   ├── InfoHeader.js
    │   │   ├── InfoPic.js
    │   │   ├── PostReview.js
    │   │   ├── ReviewList.js
    │   │   └── Star.js
    │   ├── Home                      - Home page related components
    │   │   ├── Dropdown.js
    │   │   ├── DropdownItem.js
    │   │   ├── DropdownItem.test.js
    │   │   ├── Index.js
    │   │   └── SearchBox.js
    │   └── Result                    - Result list page related components
    │       ├── Filter.js
    │       ├── Index.js
    │       ├── List.js
    │       ├── Map.js
    │       ├── Marker.js
    │       ├── PlaceItem.js
    │       └── Star.js
    ├── config.js                     - configuration, like Google Map API_KEY
    ├── images
    ├── index.js                      - entrance of the project
    ├── styles                        - stylesheets
    │   ├── Detail
    │   │   ├── Index.css
    │   │   ├── InfoDetail.css
    │   │   ├── InfoHeader.css
    │   │   ├── InfoPic.css
    │   │   ├── PostReview.css
    │   │   └── ReviewList.css
    │   ├── Home
    │   │   ├── Dropdown.css
    │   │   ├── Index.css
    │   │   └── SearchBox.css
    │   ├── Result
    │   │   ├── Filter.css
    │   │   ├── Index.css
    │   │   ├── List.css
    │   │   └── PlaceItem.css
    │   └── common.css
    └── utils                         - utilities
        ├── calDistance.js
        ├── convertType.js
        └── formatTime.js
```