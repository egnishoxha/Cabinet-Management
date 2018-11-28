import {Routes, RouterModule} from "@angular/router";

import { CabinetsComponent } from '../components/cabinets/cabinets.component';
import { CabinetAddComponent } from '../components/cabinets/cabinet-add/cabinet-add.component';
import { CabinetDetailComponent } from '../components/cabinets/cabinet-detail/cabinet-detail.component';

import { DevicesComponent } from "../components/devices/devices.component";
import { DeviceAddComponent } from '../components/devices/device-add/device-add.component';

const appRoutes: Routes = [
    { path: "cabinets", component: CabinetsComponent },
    { path: "cabinet/new", component: CabinetAddComponent },
    { path: "cabinet/detail/:id", component: CabinetDetailComponent },

    { path: "devices", component: DevicesComponent},  
    { path: "device/new", component: DeviceAddComponent },
    {
        path: "",
        redirectTo: "/cabinets",
        pathMatch: "full"
    },
    { path: "**", redirectTo: "/cabinets" }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true, enableTracing: false });
