import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';


import { AppComponent} from './app.component';
import { PessoasModule} from './pessoas/pessoas.module';
import { EstadosModule} from './estados/estados.module';
import { AppRoutingModule} from './app-routing.module';
import { DialogService } from './dialog.service';

@NgModule({
    imports:[
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),

        PessoasModule,
        EstadosModule,
    ],
    declarations:[AppComponent],
    providers: [
        DialogService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}