import { AsyncLocalStorage } from "async_hooks";



import { setCookie, deleteCookie, deleteAllCookies, getCookieValue } from "cookies-utils";
import { Curso } from "./models/Curso";
import { Student } from "./models/Student";
import { LISTA_CURSOS } from "./mock/cursos.mock";
import { Boss, Employee } from "./models/Persona";
import { ITarea, Levels } from "./models/interfaces/tarea.interface";
import { Develop } from "./models/develop";


console.log("Hi Baned!");
console.log("adios Baned!");    

//this is a comment

/**
 * more comments
 * multiline
 */

//declaracion variales 

var nombre: string = "Baned";

let email: string = "software@memcosas.com"; //variable local

const PI: number = 3.1416;

var apellidos: string = "Sxt";

var error: boolean = false;

let a:string, b:boolean, c:number;

a = "TypeScript";
b = true;
c = 8.9;

//BuiltIn Types: number, string, boolean, void, null, undefined

// Listas cadenas de texto

let listToDos: string[] = ["To Do 1", "To Do 2"];

//Combinación de tipos en listas

let valores: (string | number | boolean)[] = [false, "Hola", true, 56];

//Enumerados


enum Estados {
    "Completado" = "C",
    "Incomplete" = "I",
    "Pending" = "P"
}

enum PuestoCarrera{
    "First" = 1,
    "Second" = 2,
    "Third" = 3
}


let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Second;

// Interfaces

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

// We can create variables that follow the interface task

let tarea: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pending,
    urgencia: 10
}




// Types de TypeScript

type Product = {
    pricing: number,
    product_name: string,
    year: number
}

let coche: Product = {
    product_name: "BMW",
    pricing: 230000,
    year: 2023

}



// Operadores ternarios

console.log(coche.year < 2023 ?`Coche ${coche.product_name} is old`: `Car ${coche.product_name} is new`);


// if - else
if (error){
    console.log("There is an ERROR");
}else{
    console.log("There is no error")
}


// if - else if - else

if(coche.year < 2020){
    console.log(`Coche ${coche.product_name} is old`);
}else if(coche.year === 2023) {
    console.log(`Car ${coche.product_name} is from the current year`);
}else{
    console.log(`Car ${coche.product_name} is new`);
}

// Switch

switch(tarea.estado){
    case Estados.Completado:
        console.log("The task is completed");
        break;
        
    case Estados.Incomplete:
        console.log("The task is incomplete");
        break;
        
    case Estados.Pending:
        console.log("The task is pending");
        break;
        
    default:
        break;
}


// Bucles 

let toDoList: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Incomplete,
        urgencia: 8
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Pending,
        urgencia: 15
    },

];


//Foreach
toDoList.forEach((tarea: Tarea, index: number) => {
    console.log(`${index} - ${tarea.nombre}`);
});


// Classic For

for (let index = 0; index < toDoList.length; index ++){
    const tarea = toDoList[index];
    console.log(`${index} - ${tarea.nombre}`);
};


// While

while (tarea.estado !== Estados.Completado) {
    tarea.urgencia ++;
    if (tarea.urgencia == 20){
        tarea.estado = Estados.Completado;
        break;
    }else{
        tarea.urgencia ++;
    }
    
}

// Do While

do {
    tarea.urgencia ++;
    tarea.estado = Estados.Completado;
}while (tarea.estado !== Estados.Completado);

console.log(`Hay un error: ${error}`);
console.log(`Hola ${nombre}`);

console.log(`${nombre}'s email address is ${email}`);

// Functions

/**
 *  Function that shows a greeting in console
 */
function saludar() {
    let nombre = "Baned";

    console.log(`Hello ${nombre}`);
}  

saludar();

/**
 * 
 * @param nombre Person's name for greeting
 */

function saludarPersona(nombre: string){
    console.log(`Hi ${nombre}`)
}


saludarPersona("Baned");

/**
 * 
 * @param nombre Person's name for greeting, by default it would be "Pepe"
 */


function despedirPersona(nombre: string = "Pere"){
    console.log(`Adios ${nombre}!`)
}


despedirPersona(); // Adios, Pepe
despedirPersona("Random") // Adios, Random

/**
 * 
 * @param nombre (Opcitional) Person's name for saying good bye
 */

function despedirOpcional(nombre?: string | undefined) {

    if (nombre){
        console.log(`Adios ${nombre}!`);
    }else{
        console.log("Adios");
    }
}

despedirOpcional(); //Adios
despedirOpcional("JJ"); //Adios JJ


function manyParams(nombre: string, apellidos?:string, edad: number = 18){
    if(apellidos){
    console.log(`Hola ${nombre} ${apellidos}, tu edad es ${edad}`);

    }else{
        console.log(`Hola ${nombre}, tu edad es ${edad}`);
    }

}

manyParams("Baned"); //Baned Tiene 18 años
manyParams("Banned", "Sxt"); // Banned Sxt tiene 18 años
manyParams("Baned", undefined, 20) // Baned Sxt tiene 20 años
manyParams("Baned", "sxt", 20) // Baned Sxt tiene 20 años
// manyParams(nombre="Banned", apellidos="Sxt", edad=21) //Baned Sxt tiene 21 años


function ejemploVariosTipos(a: string | number){
    if(typeof(a) === 'string'){
        console.log("A es un string")
    }else if(typeof(a) === 'number'){
        console.log("A es un number")
    }
    else{
        console.log("A no es un string ni un number")
        throw Error("A no es ni estring ni number")
    }
}


ejemploVariosTipos("AAAAA");
ejemploVariosTipos(3);
// ejemploVariosTipos(true);
/***
 * @param nombre Person's name
 * @param apellidos Person's lastname
 * @returns Person's Full name
 */

function ejemploReturn(nombre: string, apellidos: string): string | number{
    return `${nombre} ${apellidos}`
};

let ejemploArrow = () =>{
    console.log("Hola mundo");
}

const nombreCompleto = ejemploReturn("Baned", "Sxt");

console.log(nombreCompleto); // Baned Sxt
console.log(ejemploReturn("Baned", "Sxt")); //Baned Sxt


/***
 * @param nombres is a string list of names
 */

/***
 * @
 */
function ejemploMultiParams(...nombres: string[]): void{
    nombres.forEach((nombre)=>{
        console.log(nombre);
    });
}

const lista = ["Jovany", "Sandra"];
ejemploMultiParams(...lista);


function ejemploParamsLista(...nombres: string[]){
    nombres.forEach((nombre)=>{
        console.log(nombre);
    });
}

// ejemploParamsLista(lista);



// ARROW FUNCTIONS

type Empleado= {
    nombre: string;
    apellidos: string;
    edad: number;
}
let empleado: Empleado = {
    nombre: "Random",
    apellidos: "Randitom",
    edad: 30
}

const mostrarEmpleado = (empleado: Empleado) =>{
    `${empleado.nombre} tiene ${empleado.edad} años`
};

// we call arrow function
mostrarEmpleado(empleado);

const datosEmpleado = (empleado: Empleado): string =>{
    if(empleado.edad > 70){
        return `Empleado ${empleado.nombre} esta en edad de jubilación`
    }else{
        return `Empleado ${empleado.nombre} esta en edad laboral`
    }
}

datosEmpleado(empleado) // Empleado Random está en edad laboral


const obtenerSalario = (empleado: Empleado, cobrar: () => string) =>{
    if(empleado.edad > 70){
        return
    }else{
        cobrar() // callback a ejecutar
    }
}

const cobrarEmpleado = (empleado: Empleado) =>{
    console.log(`${empleado.nombre} cobra su salario`)
}


obtenerSalario(empleado, () => 'Random Cobrar');


// Async Functions

async function ejemploAsync(): Promise<string>{


    //Await
    await console.log('Tarea a completar antes de la secuencia de instrucciones')
    console.log("Task completed")
    return `Completed`

}

ejemploAsync().then(respuesta => {
    console.log('Respuesta', respuesta)
}).catch((error) =>{
    console.log("There was an error",error)
}).finally(()=> "Everything has been finished")


// Generators

function* ejemploGenerator() {

    // yield - emitir valores
    let index = 0;
    while (index < 5){
        // valor incrementado emitido
        yield index++;
    }

}


// we save the generator function in a variable


let generadora = ejemploGenerator();

// Accedemos a los valores emitidos

console.log(generadora.next().value) // 0
console.log(generadora.next().value) // 2
console.log(generadora.next().value) // 3
console.log(generadora.next().value) // 4



// Worker
function* watcher(valor: number){
    yield valor; // emitimos valor inicial

    yield* worker(valor); // llamamos emisiones del worker

    yield valor + 10; // emitimos el valor final
}


function* worker (valor: number){
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
    yield valor + 4;
    yield valor + 5;
    yield valor + 6;
}


let generatorSaga = watcher(0);

console.log(generatorSaga.next().value) // 1 (lo ha hecho el watcher)
console.log(generatorSaga.next().value) // 2 (lo ha hecho el watcher)
console.log(generatorSaga.next().value) // 3 (lo ha hecho el watcher)
console.log(generatorSaga.next().value) // 4 (lo ha hecho el watcher)


// Sobrecarga de funciones

function mostrarError(error: string | number): void {
    console.log("ha habido un error", error);
};



// Persistencia de datos
// 1. LocalStorage --> almacena los datos en el navegador (No se eliminan automáticamente)
// 2. SessionStorage --> La direfencia radica en la sesión del navegador. Es decir, los datos se persisten en la sesión del navegador
// 3. Cookies --> Tienen una fecha de caducidad, tienen un ambito de URL



// LocalStorage

// function saveLocalStorage(): void{
    
//     localStorage.set("nombre", "Baned");

    
// }

// function readLocalStorage(): void{
//     let nombre = localStorage.get("nombre");
// }

// Cookies

const cookieOptions = {
    name: "user", // string,
    value: "Baned", // string,
    // maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // optional Date,
    path: "/", // optional string,
    // domain: "site.com", // optional string,
    // secure: true, // optional boolean,
    // sameSite: "lax", // optional enum 'lax' | 'strict' | 'none'
  };

// Set the cookie

setCookie(cookieOptions);

// Get the cookie

getCookieValue("user");

// Delete the cookie

deleteCookie("user");


// Delete all the cookies

deleteAllCookies();


// Clase Temporizador


class Temporizador {
    public terminar?: (tiempo:number) => void;

    public empezar(): void {
        setTimeout(() => {

            // check the funcion terminar exists as callback
            if(!this.terminar)return;

            // when time has passed out
            this.terminar(Date.now());

        }, 10000);
    }
}



const miTemporizador:Temporizador = new Temporizador();

// Define callback function to execute once time is out


miTemporizador.terminar = (tiempo: number) =>{
    console.log("Event finished en : ", tiempo)
}

// We lunch temp
miTemporizador.empezar(); // Timeout is started. When finished, the funcion terminar is executed


// setInterval(() => console.log("Tic", 1000)) // Prints tick each second


// Delete the executed function 
delete miTemporizador.terminar; 


// EventTarget extend



// ** CLASES 


// Creating a grade

// const cursoTS: Curso = new Curso("TypeScript", 15);
// const cursoJS: Curso = new Curso("JavaScript", 20);

// const listaCursos: Curso[] = [];

// listaCursos.push(cursoTS, cursoJS); // Lista de cursos;


// Using the MOCK
const listaCursos: Curso[] = LISTA_CURSOS;


// We create an student 

const baned: Student = new Student("Baned", listaCursos, " SXT");

console.log(`${baned.nombre} studies: `);
// Iteramos por cada una de ellos
baned.cursos.forEach((curso)=>{
    console.log(` - ${curso.nombre} (${curso.hours}) horas`);
})

// Know studied hours
 baned.studiedHours;

 baned.ID_Student;


// -Typeof
// -Instanceof

let bornDate = new Date(2002,5,20);

if (bornDate instanceof Date){
    console.log(' Its a Date Instance ');
}

if(baned instanceof Student){
    console.log("Baned is an student");
}


// Herencia y Polimorfismo

let employee1 = new Employee("Baned", "Sxt", 21, 4000);
let employee2 = new Employee("Six Stars", "Records", 20, 4000);
let employee3 = new Employee("Random", "Guy", 24, 4000);


employee1.saludar(); // herencia de Persona a employee 1 


let boss = new Boss("Migue", "Herrera", 21);


boss.employees.push(employee1, employee2, employee3);

boss.saludar(); // herencia de Persona

boss.employees.forEach((employee: Employee)=> {
    employee.saludar();// especified in employee
})


// * INTERFACES

let develop: ITarea = {
    title: 'Develop in TypeScript',
    description: 'Practicing to develop with TS',
    completed: false,
    urgency: Levels.Urgent,
    resume: function (): string {
        return `${this.title} - ${this.completed} - Level: ${this.urgency}`;
    }
}

console.log(develop.resume());


// Develop Task implements ITarea

let developTS = new Develop("TypeScript", "TS Develop task", false, Levels.Blocking);
console.log(developTS.resume());

// Experimental Decorators

// - Classes
// - Parameters
// - Methods
// - Properties

function Override(label: string){
    return function (target:any, key:string){
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        })
    }
}



class PruebaDecorador {
    @Override('prueba') // we call the override function
    nombre: string = "baned"
}



let prueba = new PruebaDecorador();

console.log(prueba.nombre) // "Prueba" will be returned throught get()


// antoher function to use as decorator

function OnlyRead(target: any, key:string){
    Object.defineProperty(target, key, {
        writable: false
    })
}

class PruebaOnlyRead{
    @OnlyRead
    nombre: string = '';

    
}

let pruebaReading = new PruebaOnlyRead();

pruebaReading.nombre = 'baned';


console.log(pruebaReading.nombre) // ==> undefined becase it cannot be defined (its only reading



// Decorate for parameters of a method

function showPosition(target: any, propertykey: string, parameterIndex: number){
    console.log("Position", parameterIndex);
}



class testMethodDecorator {

    test( a: string, @showPosition b: boolean){
        console.log(b);
    }
}



new testMethodDecorator().test('Hi!', false);



