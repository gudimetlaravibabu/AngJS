import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountserviceService } from '../accountservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dh-rtbr',
  templateUrl: './dh-rtbr.component.html',
  styleUrls: ['./dh-rtbr.component.scss']
})
export class DhRtbrComponent implements OnInit {
  response : any;

  constructor(private httpClient: HttpClient, private accountserviceService : AccountserviceService, private router: Router) { }

  ngOnInit() {

    this.httpClient.get("be/dhrtbr")
     .subscribe(
       (response)=>
        {
 
         this.response = response; 

        });
  }

}
