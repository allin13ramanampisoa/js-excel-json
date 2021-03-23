const excelToJson = require('convert-excel-to-json');
const fs = require('fs')

const result = excelToJson({
    sourceFile: 'file.xlsx',
    columnToKey: {
        B: 'designation',
        C: 'reference',
        D: 'code',
        I: 'quantite',
        J: 'prixUnitaire'
    }
});

tmpProduct = result['Final'];

var i = 0;
var products = [];
tmpProduct.forEach((ligne) =>{
    if(i !== 0 && i !== 1){
        products.push(ligne)
    }
    i++;
})

// convert JSON object to string
const data = JSON.stringify(products, null, 2);

// write JSON string to a file
fs.writeFile('produit.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});

// console.log(products);
