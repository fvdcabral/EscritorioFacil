import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Location } from '@angular/common';


import { EstadoService } from './estado.service';
import { Estado } from './estado.model';

@Component({
    moduleId: module.id,
    selector:'estado-form',
    templateUrl:'estado-form.component.html',
   
    
})

export class EstadoFormComponent implements OnInit{

    estado: Estado;
    private isNew:boolean = true;

constructor(
    private estadoService: EstadoService,
    private route: ActivatedRoute,
    private location: Location
){}

    ngOnInit(): void {
        this.estado = new Estado(0,"","",true);

        this.route.params.forEach((params: Params) => {
            let id:number = +params['id'];

            if(id){
                this.isNew = false;
                this.estadoService.getEstado(id)
                .then((estado: Estado) =>{
                    this.estado = estado;
                })
            }
        } )
    }

    getFormControlClass(isValid: boolean,isPristine:boolean): {}{
        return {
            'form-control':true,
            'is-invalid': !isValid && !isPristine,
            'is-valid': isValid && !isPristine
        };
    }

    onSubmit():void {
        
        if(this.isNew){

        }
        else{
            
        }

    }
}