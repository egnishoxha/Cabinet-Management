import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/services/device.service';
import { CabinetService } from 'src/app/services/cabinet.service';
import { IDevice } from '../../../models/Device';
import { ICabinet } from '../../../models/Cabinet';

@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.css']
})
export class DeviceAddComponent implements OnInit {

    device: IDevice;
    cabinets: ICabinet[] = [];
    deviceForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private deviceService: DeviceService,
        private cabinetService: CabinetService,
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        // this.device = {
        //     id: 0,
        //     width: 20,
        //     height: 30,
        //     cabinetId: 1
        // }

        this.loadCabinets();

        this.deviceForm = this.formBuilder.group({
            devWidth: ['', Validators.required],
            devHeight: ['', Validators.required],
            devCabinet: ['', Validators.required]
        });
    }

    loadCabinets() {
        this.cabinets = this.cabinetService.getCabinets();
    }

    get f() { return this.deviceForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.deviceForm.invalid || (this.f.devWidth.value || this.f.devHeight.value) > 30) {
            return;
        }

        this.loading = true;
        
        this.device = {
            id: 0,
            width: this.f.devWidth.value,
            height: this.f.devHeight.value,
            cabinetId: this.f.devCabinet.value
        };
        
        this.deviceService.setDevice(this.device);
        this.router.navigate(['/devices']);
    }
}
