
import{NgModule}from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { EstadosListaComponent } from './estados-lista.component';
import { EstadoFormComponent } from './estado-form.component';


const estadoRoutes: Routes= [
   { 
       path:'estados',
       component:EstadosListaComponent
   },
   {
       path:'estado/form',
       component:EstadoFormComponent
   },
   {
        path:'estado/form/:id',
        component:EstadoFormComponent
    }
]


@NgModule({
    imports:[
        RouterModule.forChild(estadoRoutes)
    ],
    exports: [ RouterModule]

})
export class EstadoRoutingModule{}