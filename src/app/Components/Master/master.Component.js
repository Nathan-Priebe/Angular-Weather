"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddCityModal_Component_1 = require("../AddCityModal/AddCityModal.Component");
var MasterComponent = (function () {
    function MasterComponent(modalService) {
        this.modalService = modalService;
    }
    MasterComponent.prototype.openModal = function () {
        this.modalService.open(AddCityModal_Component_1.NgbdModalContentComponent);
    };
    MasterComponent.prototype.addCity = function (cityName, regionName) {
        var cities = localStorage.getItem('myLocations');
        cities = cities + '|' + cityName + ',' + regionName;
        localStorage.setItem('myLocations', cities);
        location.reload();
    };
    return MasterComponent;
}());
exports.MasterComponent = MasterComponent;
//# sourceMappingURL=master.Component.js.map