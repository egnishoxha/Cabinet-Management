import { Injectable } from '@angular/core';
import { ICabinet } from '../models/Cabinet';
import { IDevice } from '../models/Device';

@Injectable({
    providedIn: 'root'
})
export class CabinetService {
  
    cabinets: ICabinet[] = [];
    cabinet: ICabinet;

    constructor() {
        this.cabinets = JSON.parse(localStorage.getItem('cabinets')) || [];
    }

    getCabinets() {
        return this.cabinets;
    }

    setCabinet(cabinet:ICabinet) {
        cabinet.id = this.cabinets.length + 1;      
        this.cabinets.push(cabinet);
        localStorage.setItem("cabinets", JSON.stringify(this.cabinets));
    }

    getCabinetById(id: number) {
        const result = this.cabinets.find(cabinet => cabinet.id === id);   
        return result; 
    }

    updateCabinet(cabinet: ICabinet, device: IDevice) {
        cabinet.devices.push(device);
        localStorage.setItem("cabinets", JSON.stringify(this.cabinets));
    }

    deleteCabinet(id: number) {
        let index = this.cabinets.map(cabinet => {
            return cabinet.id;
        }).indexOf(id);

        this.cabinets.splice(index, 1);
        localStorage.setItem("cabinets", JSON.stringify(this.cabinets));

    }

}
