import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountserviceService } from '../accountservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phc-today-lwd',
  templateUrl: './phc-today-lwd.component.html',
  styleUrls: ['./phc-today-lwd.component.scss']
})
export class PhcTodayLWDComponent implements OnInit {
  response : any;

  constructor(private httpClient: HttpClient, private accountserviceService : AccountserviceService, private router: Router) { }

  ngOnInit() {

    this.httpClient.get("be/phc")
     .subscribe(
       (response)=>
        {
 
         this.response = response; 

        });
  }

}