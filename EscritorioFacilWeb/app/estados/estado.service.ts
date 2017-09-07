import { Injectable } from '@angular/core';
import { ESTADOS } from './estados-mock';
import { Estado } from './estado.model';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EstadoService{

    private estadosUrl:string = 'app/estados';
    private headers: Headers = new Headers({'Content-Type':'application/json'});
    constructor(
        private http: Http
    ){}
    getEstados(): Promise<Estado[]> {
        return this.http.get(this.estadosUrl)
            .toPromise()
            .then(response => response.json().data as Estado[])
            .catch(this.handleError);
    }

    create(estado:Estado):Promise<Estado>{
        return this.http
        .post(this.estadosUrl,JSON.stringify(estado),{headers:this.headers})
        .toPromise()
        .then((response: Response) => response.json().data as Estado)
        .catch(this.handleError);
    }
    update(estado:Estado):Promise<Estado>{
        const url = `${this.estadosUrl}/${estado.id}`;
        return this.http
        .put(url,JSON.stringify(estado),{headers:this.headers})
        .toPromise()
        .then(() => estado as Estado)
        .catch(this.handleError);
    }

    delete(estado: Estado):Promise<Estado>{
        const url = `${this.estadosUrl}/${estado.id}`;
        return this.http
        .delete(url,{headers:this.headers})
        .toPromise()
        .then(() => estado as Estado)
        .catch(this.handleError);
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }
    getEstado(id:number) : Promise<Estado>{
        return this.getEstados()
        .then((estados: Estado[]) => estados.find(estado => estado.id === id) )
    }
}