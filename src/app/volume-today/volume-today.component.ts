import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountserviceService } from '../accountservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volume-today',
  templateUrl: './volume-today.component.html',
  styleUrls: ['./volume-today.component.scss']
})
export class VolumeTodayComponent implements OnInit {
  response : any;

  constructor(private httpClient: HttpClient, private accountserviceService : AccountserviceService, private router: Router) { }

  ngOnInit() {

    this.httpClient.get("be/volaod")
     .subscribe(
       (response)=>
        {
 
         this.response = response; 

        });
  }

}