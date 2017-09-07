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
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const cidade_service_1 = require("./cidade.service");
const cidade_model_1 = require("./cidade.model");
const estado_model_1 = require("../estados/estado.model");
let CidadeFormComponent = class CidadeFormComponent {
    constructor(cidadeService, route, location) {
        this.cidadeService = cidadeService;
        this.route = route;
        this.location = location;
        this.isNew = true;
    }
    ngOnInit() {
        this.cidade = new cidade_model_1.Cidade(0, "", new estado_model_1.Estado(0, "", "", true));
        this.route.params.forEach((params) => {
            let id = +params['id'];
            if (id) {
                this.isNew = false;
                this.cidadeService.getCidade(id)
                    .then((cidade) => {
                    this.cidade = cidade;
                });
            }
        });
    }
    getFormControlClass(isValid, isPristine) {
        return {
            'form-control': true,
            'is-invalid': !isValid && !isPristine,
            'is-valid': isValid && !isPristine
        };
    }
    onSubmit() {
        if (this.isNew) {
        }
        else {
        }
    }
};
CidadeFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cidade-form',
        templateUrl: 'cidade-form.component.html',
    }),
    __metadata("design:paramtypes", [cidade_service_1.CidadeService,
        router_1.ActivatedRoute,
        common_1.Location])
], CidadeFormComponent);
exports.CidadeFormComponent = CidadeFormComponent;
//# sourceMappingURL=cidade-form.component.js.map