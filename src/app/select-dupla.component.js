var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
export var SelectDuplaComponent = (function () {
    function SelectDuplaComponent() {
        this.dupla = new EventEmitter();
        this.items = ['José Maria', 'Mariana Fernandez', 'Fernando da Silva', 'Mariana da Silva'];
        this.value = {};
        this._disabledV = '0';
        this.disabled = false;
    }
    Object.defineProperty(SelectDuplaComponent.prototype, "disabledV", {
        get: function () {
            return this._disabledV;
        },
        set: function (value) {
            this._disabledV = value;
            this.disabled = this._disabledV === '1';
        },
        enumerable: true,
        configurable: true
    });
    SelectDuplaComponent.prototype.selected = function (value) {
        //console.log('Selected value is: ', value);
    };
    SelectDuplaComponent.prototype.removed = function (value) {
        //console.log('Removed value is: ', value);
    };
    SelectDuplaComponent.prototype.typed = function (value) {
        //console.log('New search input: ', value);
    };
    SelectDuplaComponent.prototype.refreshValue = function (value) {
        this.value = value;
        this.dupla.emit(value);
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], SelectDuplaComponent.prototype, "dupla", void 0);
    SelectDuplaComponent = __decorate([
        Component({
            selector: 'select-dupla',
            templateUrl: './select-dupla.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], SelectDuplaComponent);
    return SelectDuplaComponent;
}());

//# sourceMappingURL=select-dupla.component.js.map
