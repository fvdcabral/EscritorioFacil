import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Location } from '@angular/common';


import { CidadeService } from './cidade.service';
import { Cidade } from './cidade.model';
import { Estado } from "../estados/estado.model";

@Component({
    moduleId: module.id,
    selector:'cidade-form',
    templateUrl:'cidade-form.component.html', 
})

export class CidadeFormComponent implements OnInit{

    cidade: Cidade;
    private isNew:boolean = true;

constructor(
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private location: Location
){}

    ngOnInit(): void {
        this.cidade = new Cidade(0,"", new Estado(0, "", "", true));

        this.route.params.forEach((params: Params) => {
            let id:number = +params['id'];

            if(id){
                this.isNew = false;
                this.cidadeService.getCidade(id)
                .then((cidade: Cidade) =>{
                    this.cidade = cidade;
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