import { Component, OnInit } from '@angular/core'
import { Estado } from './estado.model';
import { EstadoService } from './estado.service';

@Component({
    moduleId: module.id,
    selector:'estados-lista',
    templateUrl:'estados-lista.component.html'
})

export class EstadosListaComponent implements OnInit{

    estados:Estado[];

    constructor(private estadoService: EstadoService){  }

    ngOnInit():void {
        

        this.estadoService.getEstados()
        .then((estados: Estado[]) => {
                this.estados = estados;
        }).catch(err => console.log(err));

    }
}