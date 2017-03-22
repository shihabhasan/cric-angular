import { Component, OnInit } from '@angular/core';
import {CricService} from "../cric.service";
import * as _ from 'underscore';
@Component({
  selector: 'app-cric-home',
  templateUrl: './cric-home.component.html',
  styleUrls: ['./cric-home.component.css']
})
export class CricHomeComponent implements OnInit {
    public cricketer_list:any[] = [];
    public selectedCricketers:number[] = [];
    public table_data:any;
    public summaryView:any;
    constructor(private cricService:CricService) { }

    ngOnInit() {
        this.getAllCricketers();
    }

    getAllCricketers(){
        this.cricService.getAllCricketList()
            .subscribe(
                res=>{
                    this.cricketer_list = res;
                    this.selectedCricketers = _.pluck(this.cricketer_list, 'id');
                    this.changeSelection(true);
                },
                error=>{
                    this.cricketer_list = [];
                    this.selectedCricketers = [];
                }
            )
    }

    changeSelection(e:boolean){
        this.getSummary();
        this.cricService.getRunsForThoseCricketers(this.selectedCricketers)
            .subscribe(
                res=>{
                    this.table_data = res;
                }
            )
    }
    getSummary(){
        this.cricService.getSummary(this.selectedCricketers)
            .subscribe(
                res=>{
                    this.summaryView = res;
                }
            )
    }



}
