import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountserviceService } from '../accountservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phc-vol-target',
  templateUrl: './phc-vol-target.component.html',
  styleUrls: ['./phc-vol-target.component.scss']
})
export class PhcVolTargetComponent implements OnInit{
  response : any;

  constructor(private httpClient: HttpClient, private accountserviceService : AccountserviceService, private router: Router) { }

  ngOnInit() {

    this.httpClient.get("be/phcvoltarget")
     .subscribe(
       (response)=>
        {
 
         this.response = response; 

        });
  }

}
