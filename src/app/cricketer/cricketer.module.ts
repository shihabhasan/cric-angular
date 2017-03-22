import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CricHomeComponent } from './cric-home/cric-home.component';
import {CricRoutingModule} from "./cricketer-routing.module";
import {CricService} from "./cric.service";
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CricRoutingModule,
        CheckboxModule,
    ],
    declarations: [CricHomeComponent],
    providers:[
        CricService,
    ]
})
export class CricketerModule { }
