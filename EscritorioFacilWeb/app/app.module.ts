import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent} from './app.component';
import { PessoasModule} from './pessoas/pessoas.module';
import { EstadosModule} from './estados/estados.module';
import { AppRoutingModule} from './app-routing.module';

@NgModule({
    imports:[
        BrowserModule,
        AppRoutingModule,
        
        PessoasModule,
        EstadosModule,
    ],
    declarations:[AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}