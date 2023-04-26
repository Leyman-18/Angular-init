export interface Person {
    id: number;
    name: string;
    surname: string;
    birthday: Date;
    work: string
    salary: number;
}

export class Persona {
    protected nombre:string;
    protected edad:number;
  
    constructor(nombre:string, edad:number) {
      this.nombre = nombre;
      this.edad = edad;
    }

    imprimir() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}