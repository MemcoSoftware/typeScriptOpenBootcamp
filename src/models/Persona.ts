export class Persona {
    nombre: string;
    lastName: string;
    age: number;


    constructor (nombre: string, lastName: string, age: number) {
        this.nombre = nombre;
        this.lastName = lastName;
        this.age = age;

    }

    saludar(): void {
        console.log(`Hi! my name is ${this.nombre} ${this.lastName} and i am ${this.age} years old`)
    }
}

export class Employee extends Persona {
    salary: number;

    constructor(nombre: string, lastName: string, age: number, salary: number) {
        super(nombre, lastName, age);
        this.salary = salary
    }
    saludar(): void {
        super.saludar();
        console.log(`My salary is $${this.salary} USD`)
    }
}


export class Boss extends Persona {
    employees: Employee [] = [];

    constructor(nombre: string, lastName: string, age: number){
        super(nombre, lastName, age)
    }
}