
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const colors  = require('colors');



const crearArchivo = async ( base = 5, listar, hasta = 10) =>{

    
    try{
        if (listar){
            console.log('============================='.red);
            console.log(`       Tabla del ${ base }           `);
            console.log('============================='.red);
        }
        
        let salida = '';
        let consola = '';

        for(let i=1; i<=hasta;i++){
            consola += `${base} ${'x'.green} ${i} = ${base*i}\n`;
            salida += `${base} x ${i} = ${base*i}\n`;
            

        }
        
        if(listar)
            console.log(consola);
            
        fs.writeFileSync(`./salida/tabala-${base}.txt`, salida);
        return (`tabla-${ base }.txt`);
    }
    catch(err) {
        throw (err);
    }
    
    

}

module.exports = { 
    crearArchivo
}