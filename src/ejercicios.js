export function multiplicarPor10(array) {
    const MULTIPLICADOR_DESEADO = 10;
    const arrayMultiplicado = array.map(num => num * MULTIPLICADOR_DESEADO);
    return arrayMultiplicado;
}

export function soloPares(array) {
    const arraySoloPares = array.filter(num => num % 2 === 0)
    return arraySoloPares;
}

export function moverALaDerecha(array) {
    const arraySinFinal = array.slice(0, [array.length - 1]);
    const nuevoArray = [array[array.length - 1], ...arraySinFinal];
    return nuevoArray;
}

export function soloUnaPalabra(array) {
    const arraySoloUnaPalabra = array.filter(elemento => elemento.split(' ').length === 1)
    return arraySoloUnaPalabra;
}

export function soloArraysPositivos(array) {
    const esPositivo = num => num > 0;
    const arraySoloNumerosPositivos = array.filter(array => array.every(esPositivo));
    return arraySoloNumerosPositivos;
}

export function soloVocales(array) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    const arraySoloVocales = array.map(palabra => palabra.split('').filter(letra => vocales.includes(letra)).join(''));
    return arraySoloVocales;
}

export function todasVocalesIguales(array) {
    const arrayPalabrasVocalesIguales = array.filter(palabra => tieneCaracteresIguales(devolverStringSoloConVocales(palabra)));
   
    return arrayPalabrasVocalesIguales;

    function tieneCaracteresIguales(string) {
        if (string.length === 1) {
          return true;
        }
    
        if (string[0] === string[1]) {
          return tieneCaracteresIguales(string.slice(1));
        }
    
        return false;
      }
      
      function devolverStringSoloConVocales(string) {
        const vocales = ['a', 'e', 'i', 'o', 'u'];
        const stringSoloVocales = string.split('').filter(letra => vocales.includes(letra)).join('');
        return stringSoloVocales;
      }
}

export function duplicarMatriz(array) {
    const arrayDuplicado = array.map(subArray => subArray.map(elemento => elemento * 2));
    return arrayDuplicado;
}

export function mayoresDeEdadValidados(array) {
    const arrayConPropiedadMayor = array.map(persona => {
        return {...persona, 'mayor': (persona.edad >= 18)};
      });

    return arrayConPropiedadMayor;
}

export function transformarObjetoEnArray(objeto) {
        const keysObjeto = Object.keys(objeto);
        const valuesObjeto = Object.values(objeto);
        const nuevoArrayDeObjeto = valuesObjeto.map((elemento,i) => {
            return {'id': keysObjeto[i], ...elemento};
        })

        return nuevoArrayDeObjeto;    
}
