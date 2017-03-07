var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef } from '@angular/core';
export var AutocompleteComponent = (function () {
    function AutocompleteComponent(myElement) {
        this.query = '';
        this.countries = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus",
            "Belgium", "Bosnia & Herzegovina", "Bulgaria", "Croatia", "Cyprus",
            "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
            "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo",
            "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta",
            "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland",
            "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia",
            "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];
        this.filteredList = [];
        this.elementRef = myElement;
    }
    AutocompleteComponent.prototype.filter = function () {
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
        else {
            this.filteredList = [];
        }
    };
    AutocompleteComponent.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
    };
    AutocompleteComponent.prototype.handleClick = function (event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }
    };
    AutocompleteComponent = __decorate([
        Component({
            selector: 'autocomplete',
            host: {
                '(document:click)': 'handleClick($event)',
            },
            template: "\n        <div class=\"container\" >\n            <div class=\"input-field col s12\">\n              <input id=\"country\" type=\"text\" class=\"validate filter-input\" [(ngModel)]=query (keyup)=filter()>\n              <label for=\"country\">Country</label>\n            </div>\n            <div class=\"suggestions\" *ngIf=\"filteredList.length > 0\">\n                <ul *ngFor=\"#item of filteredList\" >\n                    <li >\n                        <a (click)=\"select(item)\">{{item}}</a>\n                    </li>\n                </ul>\n            </div>\n        </div>      \n        "
        }), 
        __metadata('design:paramtypes', [ElementRef])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());

//# sourceMappingURL=autocomplete.component.js.map
