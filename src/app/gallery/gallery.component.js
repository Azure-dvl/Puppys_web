"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var list_dogs_1 = require("../list_dogs");
var details_component_1 = require("../details/details.component");
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.ldog = list_dogs_1.list_dogs;
    }
    GalleryComponent.prototype.ShowDetails = function (dog) {
        this.selecteddog = dog;
    };
    GalleryComponent.prototype.states = function (dog) {
        var state = '';
        if (dog.estado == false) {
            state = 'disponible';
        }
        else {
            state = 'vendido';
        }
        return state;
    };
    GalleryComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-gallery',
            standalone: true,
            imports: [common_1.NgFor, common_1.NgIf, details_component_1.DetailsComponent],
            templateUrl: './gallery.component.html',
            styleUrl: './gallery.component.scss'
        })
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
