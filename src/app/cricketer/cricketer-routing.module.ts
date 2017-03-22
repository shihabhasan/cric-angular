import {Routes, RouterModule} from "@angular/router";
import {CricHomeComponent} from "./cric-home/cric-home.component";
import {NgModule} from "@angular/core";
/**
 * Created by shetu on 3/22/17.
 */
const cricRoutes:Routes = [
    {
        path: '',
        component: CricHomeComponent
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(cricRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class CricRoutingModule {}
