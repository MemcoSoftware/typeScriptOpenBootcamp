import { ITarea, Levels } from "./interfaces/tarea.interface";

export class Develop implements ITarea {
    title: string;
    description: string;
    completed: boolean;
    urgency?: Levels | undefined;
    

    constructor(title:string, description:string, completed:boolean, urgency?: Levels | undefined) {
        this.title = title;
        this.description = description;
        this.completed = completed;
        this. urgency = urgency;
    }

    resume = () =>{
        return `Develop Task: ${this.title} - ${this.completed}`;
    }

}