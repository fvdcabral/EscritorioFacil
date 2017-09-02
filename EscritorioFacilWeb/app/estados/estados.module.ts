import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { EstadoFormComponent } from  './estado-form.component';
import { EstadosListaComponent } from  './estados-lista.component';
import { EstadoRoutingModule } from './estado-routing.module';


import { EstadoService } from './estado.service';

@NgModule({
    imports:[
        CommonModule,
        EstadoRoutingModule,
        FormsModule
    ],
    declarations: [
        EstadosListaComponent,
        EstadoFormComponent
    ],

    exports:[
        EstadosListaComponent
    ],
    providers: [
        EstadoService
    ]
})

export class EstadosModule{}