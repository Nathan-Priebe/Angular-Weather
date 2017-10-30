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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var AddCityModalComponent = (function () {
    function AddCityModalComponent(modalService) {
        this.modalService = modalService;
    }
    AddCityModalComponent.prototype.addCity = function (cityName, regionName) {
        if (cityName == null || cityName === '') {
            alert('City is mandatory');
        }
        else {
            var cities = localStorage.getItem('myLocations');
            if (regionName == null || cityName === '') {
                cities = cities + '|' + cityName;
            }
            else {
                cities = cities + '|' + cityName + ',' + regionName;
            }
            localStorage.setItem('myLocations', cities);
            location.reload();
        }
    };
    return AddCityModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AddCityModalComponent.prototype, "name", void 0);
AddCityModalComponent = __decorate([
    core_1.Component({
        templateUrl: 'AddCityModal.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], AddCityModalComponent);
exports.AddCityModalComponent = AddCityModalComponent;
//# sourceMappingURL=AddCityModal.Component.js.map