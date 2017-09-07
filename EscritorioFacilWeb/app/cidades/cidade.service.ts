import { Injectable } from '@angular/core';
import { CIDADES } from './cidades-mock';
import { Cidade } from './cidade.model';
import { Estado } from '../estados/estado.model';

@Injectable()
export class CidadeService{

    getCidades(): Promise<Cidade[]> {
        return Promise.resolve(CIDADES);
    }
    getCidade(id:number) : Promise<Cidade>{
        return this.getCidades()
        .then((cidades: Cidade[]) => cidades.find(cidade => cidade.id === id) )
    }
}