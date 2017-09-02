
import{NgModule}from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { PessoasListaComponent } from './pessoas-lista.component';
import { PessoaFormComponent } from './pessoa-form.component';


const pessoaRoutes: Routes= [
   { 
       path:'pessoa',
       component:PessoasListaComponent
   },
   {
       path:'pessoa/save',
       component:PessoaFormComponent
   }
]


@NgModule({
    imports:[
        RouterModule.forChild(pessoaRoutes)
    ]

})
export class PessoaRoutingModule{}