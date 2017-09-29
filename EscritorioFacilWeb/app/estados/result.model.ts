import { Estado } from './estado.model';

export class Result{
    
        constructor(
            public num_results:number,
            public objects:Estado[],
            public page:number,
            public total_pages:number
        ){}
    }