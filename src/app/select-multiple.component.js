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
export var SelectMultipleComponent = (function () {
    function SelectMultipleComponent() {
        this.list = new EventEmitter();
        this.value = [''];
        this._disabledV = '0';
        this.disabled = false;
        this.items = ['Sandra', 'Hermano', 'Francisco', 'Monaco'];
    }
    Object.defineProperty(SelectMultipleComponent.prototype, "disabledV", {
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
    SelectMultipleComponent.prototype.selected = function (value) {
        //console.log('Selected value is: ', value);
    };
    SelectMultipleComponent.prototype.removed = function (value) {
        //console.log('Removed value is: ', value);
    };
    SelectMultipleComponent.prototype.refreshValue = function (value) {
        this.value = value;
        //console.log("gestores", value);
        this.list.emit(this.value);
        /*
        console.log(value.map(item => {
            return item.text;
        }).join(", "));
        */
    };
    SelectMultipleComponent.prototype.itemsToString = function (value) {
        if (value === void 0) { value = []; }
        return value
            .map(function (item) {
            return item.text;
        }).join(',');
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], SelectMultipleComponent.prototype, "list", void 0);
    SelectMultipleComponent = __decorate([
        Component({
            selector: 'select-multiple',
            templateUrl: './select-multiple.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], SelectMultipleComponent);
    return SelectMultipleComponent;
}());

//# sourceMappingURL=select-multiple.component.js.map
