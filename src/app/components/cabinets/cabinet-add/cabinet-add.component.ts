import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CabinetService } from 'src/app/services/cabinet.service';
import { ICabinet } from '../../../models/Cabinet';

@Component({
  selector: 'app-cabinet-add',
  templateUrl: './cabinet-add.component.html',
  styleUrls: ['./cabinet-add.component.css']
})
export class CabinetAddComponent implements OnInit {

  cabinetForm: FormGroup;
  loading = false;
  submitted = false;
  cabinet: ICabinet;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cabinetService: CabinetService
  ) { }

  ngOnInit() {
    this.cabinetForm = this.formBuilder.group({
      cabWidth: ['', Validators.required],
      cabHeight: ['', Validators.required]
    });
  }

  get f() { return this.cabinetForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.cabinetForm.invalid || (this.f.cabWidth.value > 30) || (this.f.cabHeight.value > 50)) {
            return;
        }

        this.loading = true;
        
        this.cabinet = {
            id: 0,
            width: this.f.cabWidth.value,
            height: this.f.cabHeight.value,
            devices: []
        };
        this.cabinetService.setCabinet(this.cabinet);
        this.router.navigate(['/cabinets']);
    }
}
