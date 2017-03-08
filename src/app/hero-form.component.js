var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Agendamento } from './agendamento';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
export var NgbdModalContent = (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], NgbdModalContent.prototype, "data", void 0);
    NgbdModalContent = __decorate([
        Component({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [NgbActiveModal])
    ], NgbdModalContent);
    return NgbdModalContent;
}());
export var HeroFormComponent = (function () {
    function HeroFormComponent(modalService) {
        this.modalService = modalService;
        this.gestores = [];
        this.dupla = '';
        this.locais = ['Reuniões Grande', 'Reuniões Média', 'Reuniões Pequena'];
        this.tipos = ['Avaliação', 'Pré-avaliação'];
        this.model = new Agendamento(18, 'Mariana Fernandez', this.locais[0], '', this.tipos[0]);
        this.valDate = true;
        this.submitted = false;
        this.today = Date.now();
        console.log("Avaliado", this.model.name);
        console.log("Dupla Avaiadora", this.dupla);
    }
    HeroFormComponent.prototype.ngOnInit = function () {
        //this.open();
    };
    HeroFormComponent.prototype.checkDate = function () {
        this.today = Date.now();
        this.DataAgendamento = new Date(this.agendamento).getTime();
        if (this.DataAgendamento > this.today) {
            this.valDate = true;
            this.model.data = this.agendamento;
        }
        else
            this.valDate = false;
    };
    HeroFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    HeroFormComponent.prototype.newHero = function () {
        this.model = new Agendamento(42, '', '', '', '');
    };
    HeroFormComponent.prototype.getList = function (value) {
        this.gestores = value;
        //console.log("Gestores", this.gestores);
    };
    HeroFormComponent.prototype.getDupla = function (value) {
        this.dupla = value;
        // console.log("Avaliado", this.model.name);
        // console.log("Dupla Avaiadora", this.dupla);
    };
    HeroFormComponent.prototype.open = function () {
        console.log("Abrindo modal...");
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.data = "";
    };
    HeroFormComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'hero-form',
            styleUrls: ['./hero-form.component.css'],
            templateUrl: './hero-form.component.html'
        }), 
        __metadata('design:paramtypes', [NgbModal])
    ], HeroFormComponent);
    return HeroFormComponent;
}());

//# sourceMappingURL=hero-form.component.js.map
