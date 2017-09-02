"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const estados_lista_component_1 = require("./estados-lista.component");
const estado_form_component_1 = require("./estado-form.component");
const estadoRoutes = [
    {
        path: 'estados',
        component: estados_lista_component_1.EstadosListaComponent
    },
    {
        path: 'estado/form',
        component: estado_form_component_1.EstadoFormComponent
    },
    {
        path: 'estado/form/:id',
        component: estado_form_component_1.EstadoFormComponent
    }
];
let EstadoRoutingModule = class EstadoRoutingModule {
};
EstadoRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(estadoRoutes)
        ],
        exports: [router_1.RouterModule]
    })
], EstadoRoutingModule);
exports.EstadoRoutingModule = EstadoRoutingModule;
//# sourceMappingURL=estado-routing.module.js.map