import  { Curso }  from "./Curso";


export class Student {
    // Class Properties 

    nombre: string;
    lastName?: string;
    cursos: Curso[];
    private ID: string = "1234";

    // Constructor

    constructor(nombre: string, cursos: Curso[], lastName?: string,){
        // Initialate the properties

        this.nombre = nombre
        this.lastName = lastName?lastName: undefined;
        this.cursos = cursos;
    }



    get studiedHours (): number{

        let studiedHours = 0;
        this.cursos.forEach((curso:Curso)=>{
            studiedHours += curso.hours;
        })
        return studiedHours; 
    }

    set ID_Student (id : string){
        this.ID = id;
    }
}

