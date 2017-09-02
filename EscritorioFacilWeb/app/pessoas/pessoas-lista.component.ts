import { Component } from '@angular/core'
import { Pessoa } from './pessoa.model';
import { PESSOAS } from './pessoas-mock';

@Component({
    moduleId: module.id,
    selector:'pessoas-lista',
    templateUrl:'pessoas-lista.component.html'
})

export class PessoasListaComponent{

    pessoas:Pessoa[] = PESSOAS;
}