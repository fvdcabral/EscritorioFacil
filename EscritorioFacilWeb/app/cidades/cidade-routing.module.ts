import{NgModule}from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CidadesListaComponent } from './cidades-lista.component';
import { CidadeFormComponent } from './cidade-form.component';


const cidadeRoutes: Routes= [
   { 
       path:'cidades',
       component:CidadesListaComponent
   },
   {
       path:'cidade/form',
       component:CidadeFormComponent
   },
   {
        path:'cidade/form/:id',
        component:CidadeFormComponent
    }
]


@NgModule({
    imports:[
        RouterModule.forChild(cidadeRoutes)
    ],
    exports: [RouterModule]

})
export class CidadeRoutingModule{}