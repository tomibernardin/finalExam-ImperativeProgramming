const prompt = require("prompt-sync")({signint:true});
// Primer Parcial, Tomás Bernardin

//EJERCICIO 1
/*let estudiante = {
    nombre: `Lionel`,
    apellido: `Messi`,
    camada: 1,
    esParcial: function(nota){
        let condicion = `indefinido`;
        if (nota < 4){
            condicion = `desaprobado`;
        }
        else{
            if(nota < 7){
                condicion = `debe rendir examen final`;
            }
            else{
                condicion = `promocionado`;
            }
        }
        return(`El alumno ${this.nombre} ${this.apellido} obtuvo una nota igual a ${nota} por lo tanto, su ciondicion es ${condicion}.`);
    }
};
console.log(estudiante.esParcial(3));
console.log(estudiante.esParcial(5));
console.log(estudiante.esParcial(7));
*/

//EJERCICIO 2
/*function siguienteCursada(clase){
    clase.bimestre++;
}
let clase = [
    {nombre: `Esteban`, apellido: `Piazza`, bimestre: 1,},
    {nombre: `Leandro`, apellido: `Borrelli`, bimestre: 1,},
    {nombre: `Martin`, apellido: `Cejas`, bimestre: 1,}
];
console.log(`La informacion de esta cursada es:`);
console.log(clase);
for(let i = 0; i < clase.length; i++){
    let alumno = clase[i];
    siguienteCursada(alumno);
};
console.log(`La informacion de la siguiente cursada es:`);
console.log(clase);
*/

//EJERCICIO 3
/*const asistenciaMinima = 23;

function aprobacion(cantAsistencias, condPlayground){
    let condicionAlumno = `Desaprobado`;
    if(cantAsistencias >= asistenciaMinima && condPlayground == `true`){
        condicionAlumno = `Aprobado`;
    }
    return condicionAlumno;
}
//let asistenciaAlumno = prompt(`Ingrese la asistencia del alumno: `);
let porcentajePlayground =  prompt(`Ingrese true o false segun si el alumno ha completado en Playground: `);

console.log(aprobacion(25, porcentajePlayground));*/