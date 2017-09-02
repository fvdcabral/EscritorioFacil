"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const pessoas_lista_component_1 = require("./pessoas-lista.component");
const pessoa_form_component_1 = require("./pessoa-form.component");
const pessoaRoutes = [
    {
        path: 'pessoa',
        component: pessoas_lista_component_1.PessoasListaComponent
    },
    {
        path: 'pessoa/save',
        component: pessoa_form_component_1.PessoaFormComponent
    }
];
let PessoaRoutingModule = class PessoaRoutingModule {
};
PessoaRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(pessoaRoutes)
        ]
    })
], PessoaRoutingModule);
exports.PessoaRoutingModule = PessoaRoutingModule;
//# sourceMappingURL=pessoa-routing.module.js.map