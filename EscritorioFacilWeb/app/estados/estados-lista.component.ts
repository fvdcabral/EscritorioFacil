import { Component, OnInit } from '@angular/core'
import { Estado } from './estado.model';
import { EstadoService } from './estado.service';
import {DialogService} from './../dialog.service';
@Component({
    moduleId: module.id,
    selector:'estados-lista',
    templateUrl:'estados-lista.component.html'
})

export class EstadosListaComponent implements OnInit{

    estados:Estado[];
    mensagem:{ };
    classesCss: { };

    constructor(
        private estadoService: EstadoService,
        private dialogService: DialogService
    ){  }

    ngOnInit():void {
        

        this.estadoService.getEstados()
        .then((estados: Estado[]) => {
                this.estados = estados;
        }).catch(err => 
            {
                console.log(err)
                this.mostrarMensagem({
                    tipo: 'danger',
                    texto:'Ocorreu um erro ao carregar os estados!'
                })
            });

    }

    onDelete(estado:Estado):void{
        this.dialogService.confirm("Deseja deletar o item informado?")
        .then((canDelete: boolean) => {

            if(canDelete){
                this.estadoService.delete(estado)
                .then(() => {
                    
                    this.estados = this.estados.filter((c: Estado) => c.id != estado.id);
                    this.mostrarMensagem({
                        tipo: 'success',
                        texto:'Estado deletado!'
                    })
                }).catch(err => {
                    console.log(err);
                    this.mostrarMensagem({
                        tipo: 'danger',
                        texto:'Ocorreu um erro ao deletar o estado!'
                    })
                })

            }
        })
    }

    private mostrarMensagem(mensagem: { tipo:string,texto:string}): void{
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if(mensagem.tipo != 'danger'){
            setTimeout(() => {
                this.mensagem = undefined;
            },3000);
        }
    }

    private montarClasses(tipo:string):void{    
        this.classesCss = {
            'alert':true
        };

        this.classesCss['alert-' + tipo] = true;


    }
}