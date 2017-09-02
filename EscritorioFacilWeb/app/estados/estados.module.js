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
const estado_form_component_1 = require("./estado-form.component");
const estados_lista_component_1 = require("./estados-lista.component");
const estado_routing_module_1 = require("./estado-routing.module");
const estado_service_1 = require("./estado.service");
let EstadosModule = class EstadosModule {
};
EstadosModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            estado_routing_module_1.EstadoRoutingModule,
            forms_1.FormsModule
        ],
        declarations: [
            estados_lista_component_1.EstadosListaComponent,
            estado_form_component_1.EstadoFormComponent
        ],
        exports: [
            estados_lista_component_1.EstadosListaComponent
        ],
        providers: [
            estado_service_1.EstadoService
        ]
    })
], EstadosModule);
exports.EstadosModule = EstadosModule;
//# sourceMappingURL=estados.module.js.map