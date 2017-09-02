import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoFormComponent } from  './estado-form.component';
import { EstadosListaComponent } from  './estados-lista.component';
import { EstadoRoutingModule } from './estado-routing.module';

@NgModule({
    imports:[
        CommonModule,
        EstadoRoutingModule
    ],
    declarations: [
        EstadosListaComponent,
        EstadoFormComponent
    ],

    exports:[
        EstadosListaComponent
    ]
})

export class EstadosModule{}