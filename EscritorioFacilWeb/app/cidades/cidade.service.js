"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const cidades_mock_1 = require("./cidades-mock");
let CidadeService = class CidadeService {
    getCidades() {
        return Promise.resolve(cidades_mock_1.CIDADES);
    }
    getCidade(id) {
        return this.getCidades()
            .then((cidades) => cidades.find(cidade => cidade.id === id));
    }
};
CidadeService = __decorate([
    core_1.Injectable()
], CidadeService);
exports.CidadeService = CidadeService;
//# sourceMappingURL=cidade.service.js.map