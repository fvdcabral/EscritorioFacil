"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const estados_mock_1 = require("./estados-mock");
let EstadoService = class EstadoService {
    getEstados() {
        return Promise.resolve(estados_mock_1.ESTADOS);
    }
    getEstado(id) {
        return this.getEstados()
            .then((estados) => estados.find(estado => estado.id === id));
    }
};
EstadoService = __decorate([
    core_1.Injectable()
], EstadoService);
exports.EstadoService = EstadoService;
//# sourceMappingURL=estado.service.js.map