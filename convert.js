'use strict';
// https://www.npmjs.com/package/convert-excel-to-json
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
 
// Converts the Excel to JSON
const result = excelToJson({
    sourceFile: './src/_data/issues.xlsx',
	// Removed the first row
    header:{
        rows: 1
    },
	// Custom values for columns
	columnToKey: {
        A: 'Issue',
        B: 'SC '
    }
});

// Writes JSON file
fs.writeFileSync('./src/_data/issues.json', JSON.stringify(result, null, 2));

// console.log(result);