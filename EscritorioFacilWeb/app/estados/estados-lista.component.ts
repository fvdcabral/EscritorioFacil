import { Component } from '@angular/core'
import { Estado } from './estado.model';
import { ESTADOS } from './estados-mock';

@Component({
    moduleId: module.id,
    selector:'estados-lista',
    templateUrl:'estados-lista.component.html'
})

export class EstadosListaComponent{

    estados:Estado[] = ESTADOS;
}