
import{NgModule}from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { EstadosListaComponent } from './estados-lista.component';
import { EstadoFormComponent } from './estado-form.component';


const estadoRoutes: Routes= [
   { 
       path:'estado',
       component:EstadosListaComponent
   },
   {
       path:'estado/save',
       component:EstadoFormComponent
   }
]


@NgModule({
    imports:[
        RouterModule.forChild(estadoRoutes)
    ]

})
export class EstadoRoutingModule{}