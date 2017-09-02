import{ InMemoryDbService} from 'angular-in-memory-web-api';
import {Estado} from './estados/estado.model';

export class InMemoryDataService implements InMemoryDbService{

    createDb(){
        let estados: Estado[] = [
            { id:1, nome:'Rio de Janeiro',uf:'RJ',isAtivo: true},
            { id:2, nome:'São Paulo',uf:'SP',isAtivo:true}
        ];

        return {estados};
    }

}