import { Injectable } from '@angular/core';
import { IDevice } from '../models/Device';
import { ICabinet } from '../models/Cabinet';
import { CabinetService } from 'src/app/services/cabinet.service';

@Injectable({
    providedIn: 'root'
})

export class DeviceService {

    devices: IDevice[] = [];
    cabinets: ICabinet[] = [];
    cabinet: ICabinet;

    constructor(
        private cabinetService: CabinetService

    ) { 
        this.devices = JSON.parse(localStorage.getItem('devices')) || [];
    }

    getDevices() {
        return this.devices;
    }

    setDevice(device: IDevice) {
        
        //get cabinet
        this.cabinet = this.cabinetService.getCabinetById(+device.cabinetId);
        
        //check whether cabinet has sufficient free space
        let cabinetSurface = this.cabinet.width * this.cabinet.height;
        let deviceSurface = device.width * device.height;
        let cabinetOccupiedSurface = 0;
        let availableSurface = 0;

        if(this.cabinet.devices.length) {
            for(let i = 0; i < this.cabinet.devices.length; i++){
                cabinetOccupiedSurface += this.cabinet.devices[i].width * this.cabinet.devices[i].height;  
            }

            availableSurface = cabinetSurface - cabinetOccupiedSurface;
            if(deviceSurface <= availableSurface) {
                //add device to devices array
                device.id = this.devices.length + 1;
                this.devices.push(device);
                localStorage.setItem("devices", JSON.stringify(this.devices));

                //ush device to cabinet.devices array
                this.cabinetService.updateCabinet(this.cabinet, device);
            } else {
                alert("NO sufficient space to add device!")
            }
        } else {
            device.id = this.devices.length + 1;
            this.devices.push(device);
            localStorage.setItem("devices", JSON.stringify(this.devices));
            this.cabinetService.updateCabinet(this.cabinet, device);
        }

    }

    deleteDevice(id: number) {
        let index = this.devices.map(device => {
            return device.id;
        }).indexOf(id);

        this.devices.splice(index, 1);
        localStorage.setItem("devices", JSON.stringify(this.devices));
    }
  
}
