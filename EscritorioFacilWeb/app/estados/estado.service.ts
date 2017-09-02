import { Injectable } from '@angular/core';
import { ESTADOS } from './estados-mock';
import { Estado } from './estado.model';

@Injectable()
export class EstadoService{

    getEstados(): Promise<Estado[]> {
        return Promise.resolve(ESTADOS);
    }
    getEstado(id:number) : Promise<Estado>{
        return this.getEstados()
        .then((estados: Estado[]) => estados.find(estado => estado.id === id) )
    }
}