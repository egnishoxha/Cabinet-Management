import { Component, OnInit } from '@angular/core';
import { CabinetService } from 'src/app/services/cabinet.service';
import { ICabinet } from '../../models/Cabinet';

@Component({
  selector: 'app-cabinets',
  templateUrl: './cabinets.component.html',
  styleUrls: ['./cabinets.component.css']
})

export class CabinetsComponent implements OnInit {

    cabinets: ICabinet[] = [];

    constructor(
        private cabinetService: CabinetService
    ) { }

    ngOnInit() {
        this.loadCabinets();
    }

    loadCabinets() {
        this.cabinets = this.cabinetService.getCabinets();
    }

    removeCabinet(id: number) {
        this.cabinetService.deleteCabinet(id);
    }

}
