// File system: escrevendo
// Além de ler,podemos também alterar o mesmo;
// Chamamos isso de escrever no arquivo.;


let{readFile, writeFile} = require('fs');

readFile("arquivo.txt", "utf8", (error, texto) => {
    if(error) {
        throw error;
    } else {
        console.log(texto);
    }
});

writeFile("arquivo.txt", "Texto por write file", (error) => {
    if(error) {
        throw error;
    } else {
        console.log("Escreveu com sucesso!");
    }

} );