"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let EstadoService = class EstadoService {
    constructor(http) {
        this.http = http;
        this.estadosUrl = 'app/estados';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    getEstados() {
        return this.http.get(this.estadosUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    create(estado) {
        return this.http
            .post(this.estadosUrl, JSON.stringify(estado), { headers: this.headers })
            .toPromise()
            .then((response) => response.json().data)
            .catch(this.handleError);
    }
    update(estado) {
        const url = `${this.estadosUrl}/${estado.id}`;
        return this.http
            .put(url, JSON.stringify(estado), { headers: this.headers })
            .toPromise()
            .then(() => estado)
            .catch(this.handleError);
    }
    delete(estado) {
        const url = `${this.estadosUrl}/${estado.id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => estado)
            .catch(this.handleError);
    }
    handleError(err) {
        return Promise.reject(err.message || err);
    }
    getEstado(id) {
        return this.getEstados()
            .then((estados) => estados.find(estado => estado.id === id));
    }
};
EstadoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EstadoService);
exports.EstadoService = EstadoService;
//# sourceMappingURL=estado.service.js.map