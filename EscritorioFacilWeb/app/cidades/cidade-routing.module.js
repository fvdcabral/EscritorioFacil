"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const cidades_lista_component_1 = require("./cidades-lista.component");
const cidade_form_component_1 = require("./cidade-form.component");
const cidadeRoutes = [
    {
        path: 'cidades',
        component: cidades_lista_component_1.CidadesListaComponent
    },
    {
        path: 'cidade/form',
        component: cidade_form_component_1.CidadeFormComponent
    },
    {
        path: 'cidade/form/:id',
        component: cidade_form_component_1.CidadeFormComponent
    }
];
let CidadeRoutingModule = class CidadeRoutingModule {
};
CidadeRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(cidadeRoutes)
        ],
        exports: [router_1.RouterModule]
    })
], CidadeRoutingModule);
exports.CidadeRoutingModule = CidadeRoutingModule;
//# sourceMappingURL=cidade-routing.module.js.map