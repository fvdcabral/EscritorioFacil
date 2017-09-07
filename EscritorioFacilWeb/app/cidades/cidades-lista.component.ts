import { Component, OnInit } from '@angular/core'
import { Cidade } from './cidade.model';
import { Estado } from '../estados/estado.model';
import { CidadeService } from './cidade.service';
import { EstadoService } from "../estados/estado.service";

@Component({
    moduleId: module.id,
    selector:'cidades-lista',
    templateUrl:'cidades-lista.component.html'
})

export class CidadesListaComponent implements OnInit{

    cidades:Cidade[]; 
    estados:Estado[];
    selectedEstado:Estado;

    constructor(private cidadeService: CidadeService, private estatoService: EstadoService){  }

    ngOnInit():void {
        
        this.cidadeService.getCidades()
        .then((cidades: Cidade[]) => {
                this.cidades = cidades;
        }).catch(err => console.log(err));

        this.estatoService.getEstados()
        .then((estados: Estado[]) => {
                this.estados = estados;
        }).catch(err => console.log(err));

    }
}