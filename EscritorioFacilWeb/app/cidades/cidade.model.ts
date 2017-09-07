import { Estado } from '../Estados/estado.model';

export class Cidade{
    
        constructor(
            public id:number,
            public nome:string,
            public estado:Estado
        ){}
    }