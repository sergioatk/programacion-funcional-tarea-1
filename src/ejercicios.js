export function multiplicarPor10(array) {}
export function multiplicarPor10(array) {
    const MULTIPLICADOR_DESEADO = 10;
    const nuevoArray = [];
    for (let index in array) {
        const nuevoElemento = array[index] * MULTIPLICADOR_DESEADO;
        nuevoArray.push(nuevoElemento);
    }

export function soloPares(array) {}
    return nuevoArray;
    
}


export function soloPares(array) {
    const nuevoArray = [];

    for (let index in array) {
        if (array[index] % 2 === 0) {
            nuevoArray.push(array[index]);
        }
    }

    return nuevoArray;
}

export function moverALaDerecha(array) {
    
    const nuevoArray = [...array];
    const elementoAMover = nuevoArray[nuevoArray.length - 1];
    const arrSinUltimoIndice = nuevoArray.slice(0,-1);
    const arrayFinal = [elementoAMover, ...arrSinUltimoIndice];

    return arrayFinal;
}

export function soloUnaPalabra(array) {
    const nuevoArray = [...array];
    const arraySinEspacios = 
        nuevoArray.filter(elemento => {
            return elemento.split(' ').length === 1;
        })

    return arraySinEspacios;
}

export function soloArraysPositivos(array) {
    
    const nuevoArray = [...array];
    const esPositivo = (num) => num > 0;
    const soloPositivos =
          nuevoArray.filter((array, index) => {
              return array.every(esPositivo);
          })

    return soloPositivos;
          
}

export function soloVocales(array) {
    const nuevoArr = [...array]
    const arrSinConsonantes =
        nuevoArr.map(palabra => {
        return palabra.split('').filter(letra => {
            return letra === 'a' ||  letra === 'e' ||  letra === 'i' ||  letra === 'o' ||  letra === 'u';
        }).join('');
        });

    return arrSinConsonantes;
}

export function todasVocalesIguales(array) {
    const nuevoArr = [...array]
    const arraySoloVocalesIguales = 
    nuevoArr.filter(string => {
        const stringSinVocales = devolverStringSoloConVocales(string);
        return tieneCaracteresIguales(stringSinVocales);
    })

    return arraySoloVocalesIguales;

    function tieneCaracteresIguales(string = '', index = 1, letraActual = string[1]) { 
        if (!string[index]) {
            return true;
        }
        const indexSiguiente = index + 1;
        const indexAnterior = index - 1;
        const letraAnterior = string[indexAnterior];
        if (letraActual === letraAnterior) {   
            return tieneCaracteresIguales(string, indexSiguiente, string[indexSiguiente]);
        } else {
            return false
        }
    }
      
    function devolverStringSoloConVocales(string) { 
        const nuevoString = string.split('');
        const stringSoloVocales = 
        nuevoString.filter(palabra => {
            return palabra.split('').filter(letra => {
                return letra === 'a' ||  letra === 'e' ||  letra === 'i' ||  letra === 'o' ||  letra === 'u';
            }).join(''); 
        })
        return stringSoloVocales;
    }
}

export function duplicarMatriz(array) {
    const nuevoArray = [...array];
    const arrayDuplicado = 
        nuevoArray.map((arreglo, i) => {
            return arreglo.map(numero => {
                return numero * 2;
            })
        });

        return arrayDuplicado;
}

export function mayoresDeEdadValidados(array) {}

export function transformarObjetoEnArray(objeto) {}
