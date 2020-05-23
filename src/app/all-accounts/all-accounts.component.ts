import { Component, OnInit } from '@angular/core';
import { AccountBE } from '../account-be';
import { AccountSummary } from '../account-summary';
import { TotalBE } from '../total-be';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountserviceService } from '../accountservice.service';
import { Router } from '@angular/router';
import { AccountPV } from '../account-pv';

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.scss']
})
export class AllAccountsComponent implements OnInit {

  
  accountSummary:AccountSummary[];
  totalBE:TotalBE[];
  response:any
  
  

  
  constructor(private httpClient: HttpClient, private accountserviceService : AccountserviceService, private router: Router)
  {
 
  }
  
  ngOnInit(){

   /* let username = 'user'
    let password = 'pass'
    const headers = new HttpHeaders({ Authorization : 'Basic' + btoa(username +':'+password)}); */

  
   this.httpClient.get("be/allaccounts") //, {headers})
     .subscribe(
       (response)=>
        {
 
         this.response = response;
         this.accountSummary=this.response;
       
         this.httpClient.get("be/data/pu/total")
            .subscribe(
            (response)=>
             {
      
              this.response = response; 
              this.totalBE=this.response;
              
              
              
             });
        });

        
  
  }


 

 
 }