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
const estado_service_1 = require("./estado.service");
const dialog_service_1 = require("./../dialog.service");
let EstadosListaComponent = class EstadosListaComponent {
    constructor(estadoService, dialogService) {
        this.estadoService = estadoService;
        this.dialogService = dialogService;
    }
    ngOnInit() {
        this.estadoService.getEstados()
            .then((estados) => {
            this.estados = estados;
        }).catch(err => {
            console.log(err);
            this.mostrarMensagem({
                tipo: 'danger',
                texto: 'Ocorreu um erro ao carregar os estados!'
            });
        });
    }
    onDelete(estado) {
        this.dialogService.confirm("Deseja deletar o item informado?")
            .then((canDelete) => {
            if (canDelete) {
                this.estadoService.delete(estado)
                    .then(() => {
                    this.estados = this.estados.filter((c) => c.id != estado.id);
                    this.mostrarMensagem({
                        tipo: 'success',
                        texto: 'Estado deletado!'
                    });
                }).catch(err => {
                    console.log(err);
                    this.mostrarMensagem({
                        tipo: 'danger',
                        texto: 'Ocorreu um erro ao deletar o estado!'
                    });
                });
            }
        });
    }
    mostrarMensagem(mensagem) {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != 'danger') {
            setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
    }
    montarClasses(tipo) {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true;
    }
};
EstadosListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'estados-lista',
        templateUrl: 'estados-lista.component.html'
    }),
    __metadata("design:paramtypes", [estado_service_1.EstadoService,
        dialog_service_1.DialogService])
], EstadosListaComponent);
exports.EstadosListaComponent = EstadosListaComponent;
//# sourceMappingURL=estados-lista.component.js.map