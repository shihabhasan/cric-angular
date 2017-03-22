import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import 'rxjs/add/operator/map';

@Injectable()
export class CricService {
    private cricketerUrl:string = environment.api_server+'cricketers/';
    constructor(private http:Http) { }

    getAllCricketList(){
        return this.http.get(this.cricketerUrl).map(res=>res.json());
    }

    getRunsForThoseCricketers(d:number[]){
        return this.http.post(this.cricketerUrl+'run', d).map(res=>res.json());
    }
}
