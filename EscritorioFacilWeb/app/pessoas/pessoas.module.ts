import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaFormComponent } from  './pessoa-form.component';
import { PessoasListaComponent } from  './pessoas-lista.component';
import { PessoaRoutingModule } from './pessoa-routing.module';

@NgModule({
    imports:[
        CommonModule,
        PessoaRoutingModule
    ],
    declarations: [
        PessoasListaComponent,
        PessoaFormComponent
    ],

    exports:[
        PessoasListaComponent
    ]
})

export class PessoasModule{}