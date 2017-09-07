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
const estado_service_1 = require("./estado.service");
const estado_model_1 = require("./estado.model");
let EstadoFormComponent = class EstadoFormComponent {
    constructor(estadoService, route, location) {
        this.estadoService = estadoService;
        this.route = route;
        this.location = location;
        this.isNew = true;
    }
    ngOnInit() {
        this.estado = new estado_model_1.Estado(0, "", "", true);
        this.route.params.forEach((params) => {
            let id = +params['id'];
            if (id) {
                this.isNew = false;
                this.estadoService.getEstado(id)
                    .then((estado) => {
                    this.estado = estado;
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
        let promise;
        if (this.isNew) {
            promise = this.estadoService.create(this.estado);
        }
        else {
            promise = this.estadoService.update(this.estado);
        }
        promise.then(estado => this.location.back());
    }
};
EstadoFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'estado-form',
        templateUrl: 'estado-form.component.html',
    }),
    __metadata("design:paramtypes", [estado_service_1.EstadoService,
        router_1.ActivatedRoute,
        common_1.Location])
], EstadoFormComponent);
exports.EstadoFormComponent = EstadoFormComponent;
//# sourceMappingURL=estado-form.component.js.map