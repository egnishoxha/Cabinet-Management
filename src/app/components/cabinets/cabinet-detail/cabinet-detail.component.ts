import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ICabinet } from '../../../models/Cabinet';
import { CabinetService } from 'src/app/services/cabinet.service';

@Component({
  selector: 'app-cabinet-detail',
  templateUrl: './cabinet-detail.component.html',
  styleUrls: ['./cabinet-detail.component.css']
})
export class CabinetDetailComponent implements OnInit {

  cabinet: ICabinet;

  constructor(
      private route: ActivatedRoute,
      private cabinetService: CabinetService
  ) { }

  ngOnInit() {
      if (this.route.snapshot.paramMap.get("id") != null) {
          let cabinetId = +this.route.snapshot.paramMap.get("id");
          this.cabinet = this.cabinetService.getCabinetById(cabinetId);

      }else{
            alert("The selected cabinet couldn't be found!");
      }
  }

}
