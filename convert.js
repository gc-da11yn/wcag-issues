'use strict';
// https://www.npmjs.com/package/excel-as-json2
const convertExcel = require('excel-as-json2').processFile;

// Converting Excel to JSON
// convertExcel(src, dst, options, callback);
convertExcel (
		'./src/_data/issues.xlsx', 
		'./src/_data/issues.json'
		)
