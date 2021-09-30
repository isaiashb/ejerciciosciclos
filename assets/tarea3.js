//1) Calcular el promedio de un alumno que tiene 7 calificaciones en la materia de Diseño Estructurado de Algoritmos

let calificaciones = [];

for (let i = 0; i < 7; i++) {
  let numero = i+1;
  let calificacion = parseInt(prompt(`Dame tu calificación ${numero}`));
  calificaciones.push(calificacion);
}

console.log(calificaciones);
let suma = 0,
  promedio = 0;


calificaciones.forEach(function (calificacion) {
  suma += calificacion;
});

promedio = suma/7;
console.log(`Tu promedio obtenido es ${promedio}`);

//2) Leer 10 números y obtener su cubo y su cuarta.

let cubos = [];
let cuartas=[];
let numeros=[];

for (let i = 0; i < 10; i++) {
  let Orden = i+1;
  let numero= parseInt(prompt(`Dame el numero ${Orden}`));
  let cubo= numero*numero*numero;
  let cuarta= cubo* numero;
  cubos.push(cubo); 
  cuartas.push(cuarta); 
  numeros.push(numero);
}
console.log(`los numeros ingresados son ${numeros}`);
console.log(`el cubo de los numeros ingresados son ${cubos}`);
console.log(`la cuarta de los numeros ingresados son ${cuartas}`); 


/*3) Leer 10 números e imprimir solamente los números positivos*/

let numeros=[];
let numeropositivos=[];

for (let i = 0; i < 10; i++) {
  let Orden = i+1;
  let numero= parseInt(prompt(`Dame el numero ${Orden}`));
  numeros.push(numero);  
    if (numero > 0){
        let numeropositivo= numero;
        numeropositivos.push(numeropositivo);
    }
}

console.log(numeros);
console.log(`los numeros positivos que ingresaste fueron: ${numeropositivos} `);



//4) Leer 20 números e imprimir cuantos son positivos, cuantos negativos y cuantos neutros.

let numeros=[];
let numeropositivos=[];
let numeronegativos=[];
let numeroneutros=[];

for (let i = 0; i < 20; i++) {
  let Orden = i+1;
  let numero= parseInt(prompt(`Dame el numero ${Orden}`));
  numeros.push(numero);  
  if (numero > 0){
    let numeropositivo= numero;
    numeropositivos.push(numeropositivo);
  }else if(numero < 0){
    let numeronegativo= numero;
    numeronegativos.push(numeronegativo);
  }else{
    let numeroneutro= numero;
    numeroneutros.push(numeroneutro);
  }
}
console.log(numeros);
console.log(`los numeros positivos que ingresaste fueron: ${numeropositivos} `);
console.log(`los numeros negativos que ingresaste fueron: ${numeronegativos}`);
console.log(`los numero neutros que ingresaste fueron: ${numeroneutros}`);

//5) Leer 15 números negativos y convertirlos a positivos e imprimir dichos números.

let numeros=[];
let numeropositivos=[];

for (let i = 0; i < 15; i++) {
  let Orden = i+1;
  let numero= parseInt(prompt(`Dame el numero ${Orden}`));
  let numeropositivo=Math.abs(numero);
  numeros.push(numero);
  numeropositivos.push(numeropositivo);
}

console.log(numeros);
console.log(`numeros convertidos a positivos: ${numeropositivos}`);

//6) Suponga que se tiene un conjunto de calificaciones de un grupo de 40 alumnos. 
//Realizar un algoritmo para calcular la calificación media y la calificación mas baja de 
//todo el grupo.
  
let calificaciones = [];
for (let i = 0; i < 4; i++) {
  let numero = i+1;
  let calificacion = parseInt(prompt(`Dame la calificación ${numero}`));
  calificaciones.push(calificacion);
}
console.log(calificaciones);

let min = calificaciones[0]
for( let i =0; i < 4;i++){
    if(min<calificaciones[i++]){

       (min=calificaciones[i++])
    }else if (min>calificaciones[i++]){
        (calificaciones[i++]=min)
    }else{
        console.log(`la calificacion mas baja fue: ${min}`);
    }
}

let suma = 0,
  media = 0;
calificaciones.forEach(function (calificacion) {
  suma += calificacion;
});
media = suma/4;
console.log(`la media obtenido es: ${media}`);



/*7) Calcular e imprimir la tabla de multiplicar de un numero cualquiera. 
Imprimir el multiplicando, el multiplicador y el producto.*/

let numerointruducido= parseInt(prompt('introduce un numero cualquiera'));
let multiplicacion=0;
for (let i = 1; i < 11; i++) {
    multiplicacion= numerointruducido*i;
    //console.log(`el multiplicado es ${numerointruducido}, el multiplicador es ${i} y el producto es ${multiplicacion}`);
    console.log(`${numerointruducido}*${i}=${multiplicacion}`);
} 

/*8)Simular el comportamiento de un reloj digital, imprimiendo la hora, minutos y 
segundos de un día desde las 0:00:00 horas hasta las 23:59:59 horas*/

let intro= prompt('para iniciar introdusca init');
if(intro='init'){
for (let h = 0 ; h <= 23; h++){
    for (let m = 0; m <= 59; m++){
        for (let s = 0; s <= 59; s++){
            console.log(`${h}:${m}:${s}`)
        }
    }
}
}else{
      console.log('introdusca bien init')
}





