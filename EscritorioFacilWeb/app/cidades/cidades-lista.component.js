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
const cidade_service_1 = require("./cidade.service");
const estado_service_1 = require("../estados/estado.service");
let CidadesListaComponent = class CidadesListaComponent {
    constructor(cidadeService, estatoService) {
        this.cidadeService = cidadeService;
        this.estatoService = estatoService;
    }
    ngOnInit() {
        this.cidadeService.getCidades()
            .then((cidades) => {
            this.cidades = cidades;
        }).catch(err => console.log(err));
        this.estatoService.getEstados()
            .then((estados) => {
            this.estados = estados;
        }).catch(err => console.log(err));
    }
};
CidadesListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cidades-lista',
        templateUrl: 'cidades-lista.component.html'
    }),
    __metadata("design:paramtypes", [cidade_service_1.CidadeService, estado_service_1.EstadoService])
], CidadesListaComponent);
exports.CidadesListaComponent = CidadesListaComponent;
//# sourceMappingURL=cidades-lista.component.js.map