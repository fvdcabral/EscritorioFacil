"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const pessoa_form_component_1 = require("./pessoa-form.component");
const pessoas_lista_component_1 = require("./pessoas-lista.component");
const pessoa_routing_module_1 = require("./pessoa-routing.module");
let PessoasModule = class PessoasModule {
};
PessoasModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            pessoa_routing_module_1.PessoaRoutingModule
        ],
        declarations: [
            pessoas_lista_component_1.PessoasListaComponent,
            pessoa_form_component_1.PessoaFormComponent
        ],
        exports: [
            pessoas_lista_component_1.PessoasListaComponent
        ]
    })
], PessoasModule);
exports.PessoasModule = PessoasModule;
//# sourceMappingURL=pessoas.module.js.map