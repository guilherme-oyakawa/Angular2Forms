var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Agendamento } from './agendamento';
export var HeroFormComponent = (function () {
    function HeroFormComponent() {
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
        console.log("Gestores avaliadores", this.gestores);
    };
    HeroFormComponent.prototype.newHero = function () {
        this.model = new Agendamento(42, '', '', '', '');
    };
    HeroFormComponent.prototype.getList = function (value) {
        this.gestores = value;
        console.log("Gestores", this.gestores);
    };
    HeroFormComponent.prototype.getDupla = function (value) {
        this.dupla = value;
        console.log("Avaliado", this.model.name);
        console.log("Dupla Avaiadora", this.dupla);
    };
    HeroFormComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'hero-form',
            styleUrls: ['./hero-form.component.css'],
            templateUrl: './hero-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HeroFormComponent);
    return HeroFormComponent;
}());

//# sourceMappingURL=hero-form.component.js.map
