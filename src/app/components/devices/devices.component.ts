import { Component, OnInit } from '@angular/core';
import { IDevice } from '../../models/Device';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  devices: IDevice[] = [];

  constructor(
      private deviceService: DeviceService
  ) { }

  ngOnInit() {
      this.loadDevices();
  }

  loadDevices() {
      this.devices = this.deviceService.getDevices()
  }

  removeDevice(id: number) {
     this.deviceService.deleteDevice(id)
  }

}
