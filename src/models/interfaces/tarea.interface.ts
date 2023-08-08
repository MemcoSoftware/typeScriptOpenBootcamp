export enum Levels{
    "Informative",
    "Urgent",
    "Blocking"
}

// Interface works to define the signature and the nessesary points to complement to who use it
export interface ITarea{
    title: string,
    description: string,
    completed: boolean,
    urgency?: Levels,
    resume: ()=> string
    
}