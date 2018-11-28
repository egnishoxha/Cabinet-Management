import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from "./routing/app.routing";
import { ReactiveFormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { CabinetsComponent } from './components/cabinets/cabinets.component';
import { DevicesComponent } from './components/devices/devices.component';
import { CabinetAddComponent } from './components/cabinets/cabinet-add/cabinet-add.component';
import { CabinetDetailComponent } from './components/cabinets/cabinet-detail/cabinet-detail.component';
import { DeviceAddComponent } from './components/devices/device-add/device-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CabinetsComponent,
    DevicesComponent,
    CabinetAddComponent,
    CabinetDetailComponent,
    DeviceAddComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
