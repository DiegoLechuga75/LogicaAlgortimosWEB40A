const fs = require("fs");

/* fs.readFile("miTexto.txt", function(err, data){
    if(err){
        throw err;
    }
    console.log(data.toString());
}) */

fs.appendFile('mynewfile1.txt', 'Hola', function (err) {
    if (err){
        throw err;
    }
    console.log('Saved!');
});

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

fs.writeFile('mynewfile1.txt', 'Este contenido es nuevo!', function (err) {
    if (err) throw err;
    console.log('Write function!');
});

/* fs.unlink('mynewfile2.txt', function (err) {
    if (err){
        throw err;
    }
    console.log('File deleted!');
}); */

/* fs.rename('miTexto.txt', 'miTextoRenombrado.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
}); */

const options = {
    idioma: "esp",
    fecha: "14/04/2025",
    preferencias: [true, false, true]
}

const miJSON = JSON.stringify(options);
console.log(miJSON);

const miObj = JSON.parse(miJSON);
console.log(miObj);

