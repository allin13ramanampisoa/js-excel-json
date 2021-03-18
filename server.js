const excelToJson = require('convert-excel-to-json');
const fs = require('fs')

const result = excelToJson({
    sourceFile: 'file.xlsx',
    columnToKey: {
        A: 'nom',
        B: 'quantite',
        C: 'pu'
    }
});

tmpProduct = result['Feuil1'];

var i = 0;
var products = [];
tmpProduct.forEach((ligne) =>{
    if(i !== 0){
        products.push(ligne)
    }
    i++;
})

// convert JSON object to string
const data = JSON.stringify(products);

// write JSON string to a file
fs.writeFile('produit.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});

// console.log(products);
