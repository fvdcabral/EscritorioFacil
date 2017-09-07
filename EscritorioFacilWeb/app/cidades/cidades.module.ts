import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { CidadeFormComponent } from  './cidade-form.component';
import { CidadesListaComponent } from  './cidades-lista.component';
import { CidadeRoutingModule } from './cidade-routing.module';


import { CidadeService } from './cidade.service';

@NgModule({
    imports:[
        CommonModule,
        CidadeRoutingModule,
        FormsModule
    ],
    declarations: [
        CidadesListaComponent,
        CidadeFormComponent
    ],

    exports:[
        CidadesListaComponent
    ],
    providers: [
        CidadeService
    ]
})

export class CidadesModule{}