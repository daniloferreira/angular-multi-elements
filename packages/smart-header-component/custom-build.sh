#!/bin/sh
ng build smart-header-component --prod --output-hashing=none && cat dist/smart-header-component/runtime-es2015.js dist/smart-header-component/polyfills-es2015.js dist/smart-header-component/scripts.js dist/smart-header-component/main-es2015.js > preview/smart-header.js
