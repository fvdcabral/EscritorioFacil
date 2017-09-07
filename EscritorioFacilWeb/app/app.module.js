"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
const in_memory_data_service_1 = require("./in-memory-data.service");
const app_component_1 = require("./app.component");
const pessoas_module_1 = require("./pessoas/pessoas.module");
const estados_module_1 = require("./estados/estados.module");
const app_routing_module_1 = require("./app-routing.module");
const dialog_service_1 = require("./dialog.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            pessoas_module_1.PessoasModule,
            estados_module_1.EstadosModule,
        ],
        declarations: [app_component_1.AppComponent],
        providers: [
            dialog_service_1.DialogService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map