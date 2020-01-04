#!/bin/sh
ng build smart-footer --prod --output-hashing=none && cat dist/smart-footer/runtime-es2015.js dist/smart-footer/polyfills-es2015.js dist/smart-footer/scripts.js dist/smart-footer/main-es2015.js > preview/smart-footer.js
