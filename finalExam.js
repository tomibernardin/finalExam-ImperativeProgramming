// Examen Final, Tomás Bernardin
//EJERCICIO 1
const alumnos = [
    {
    id: 0,
    nombre: "Leandro",
    apellido: "Borrelli",
    legajo: 20210308,
    notas: [],
    },
    {
    id: 1,
    nombre: "Esteban",
    apellido: "Piazza",
    legajo: 20210211,
    notas: [],
    },
    {
    id: 2,
    nombre: "Martin",
    apellido: "Cejas",
    legajo: 20210218,
    notas: [],
    },
    {
    id: 3,
    nombre: "Karina",
    apellido: "Borgna",
    legajo: 20210516,
    notas: [],
    },
    {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [],
    },
];

/*
1 - a:
La variable alumnos contiene un array de objetos literales.
1 - b:
Las propiedades serian, id, nombre, apellido, legajo y notas.
*/
alumnos[0].notas.push(8,7,9,10,8);
alumnos[1].notas.push(5,8,6,4,7);
alumnos[2].notas.push(6,6,8,4,5);
alumnos[3].notas.push(2,3,5,7,6);
alumnos[4].notas.push(9,7,9,8,7);
//console.log(alumnos);

function ordenarLegajo(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j].legajo > array[j+1].legajo){
                let temporal = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporal;
            }
        }
    }
    return array;
}
console.log(ordenarLegajo(alumnos));

function ordenarNotasAsc(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].notas.length; j++){
            if(array[i].notas[j] > array[i].notas[j + 1]){
                let temporal = array[i].notas[j];
                array[i].notas[j] = array[i].notas[j + 1];
                array[i].notas[j + 1] = temporal;
                j = 0;
            }
        }
    }
    return array;
}
console.log(ordenarNotasAsc(alumnos));

function agregaPromedios(array){
    for(let i = 0; i < array.length; i++){
        let prom = 0;
        for(let j = 0; j < array[i].notas.length; j++){
            prom += array[i].notas[j];
        }
        prom /= array[i].notas.length;
        array[i].promedios = prom;
    }
    return array;
}
console.log(agregaPromedios(alumnos));

function aprobados(array){
    let aprobados = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].promedios >= 7){
            aprobados.push(array[i]);
        }
    }
    return aprobados;
}
console.log('Los aprobados son')
console.log(aprobados(alumnos));


//EJERCICIO 2
let fila1 = [1, 2, 3];
let fila2 = [8, 1, 4];
let fila3 = [5, 6, 9];

let matriz = [fila1, fila2, fila3];

function operaciones(mat) {
    let diagonal = 0, inversa = 0, diagonales = 0, pares = 0, valores = 0;
    for (let i = 0; i < mat.length; i++) {
        diagonal += mat[i][i];
        inversa += mat[i][mat.length - (i+1)];
        diagonales = diagonal + inversa;
        for(let j = 0; j < mat[i].length; j++){
            valores += mat [i][j];
            if(mat [i][j] %2 == 0){
                pares += mat [i][j];
            }
        }
    }
    console.log({
        diagonales: diagonales,
        diagonal: diagonal,
        inversa: inversa,
        pares: pares,
        sumaTotal: valores
    });
}
//operaciones(matriz);

function traspuestaTriple(mat){
    let trasp = [[],[],[]];
    for (let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            trasp[j][i] = mat [i][j];
        }
    }
    //console.log(mat);
    //console.log(trasp);
    return trasp;
}
//console.log(traspuestaTriple(matriz));
