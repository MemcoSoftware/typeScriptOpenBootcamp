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


// if - else if - else
if (error){
    console.log("There is an ERROR");
}else{
    console.log("There is no error")
}





console.log(`Hay un error: ${error}`);

console.log(`Hola ${nombre}`);

console.log(`${nombre}'s email address is ${email}`);

