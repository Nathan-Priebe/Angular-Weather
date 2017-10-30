import { Component } from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {AddCityModalComponent} from '../AddCityModal/AddCityModal.Component';
import { WebRequestService } from '../../Services/WebRequest.Service';

@Component({
    selector: 'app-root',
    templateUrl: 'Master.html',
    providers: [WebRequestService]
})

export class MasterComponent {

    constructor(private modalService: NgbModal) {}

    openModal() {
        this.modalService.open(AddCityModalComponent);
    }
}
