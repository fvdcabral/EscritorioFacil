"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const cidade_form_component_1 = require("./cidade-form.component");
const cidades_lista_component_1 = require("./cidades-lista.component");
const cidade_routing_module_1 = require("./cidade-routing.module");
const cidade_service_1 = require("./cidade.service");
let CidadesModule = class CidadesModule {
};
CidadesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            cidade_routing_module_1.CidadeRoutingModule,
            forms_1.FormsModule
        ],
        declarations: [
            cidades_lista_component_1.CidadesListaComponent,
            cidade_form_component_1.CidadeFormComponent
        ],
        exports: [
            cidades_lista_component_1.CidadesListaComponent
        ],
        providers: [
            cidade_service_1.CidadeService
        ]
    })
], CidadesModule);
exports.CidadesModule = CidadesModule;
//# sourceMappingURL=cidades.module.js.map