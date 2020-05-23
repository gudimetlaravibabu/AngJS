import { Component, OnInit } from '@angular/core';
import { AccountBE } from '../account-be';
import { AccountSummary } from '../account-summary';
import { TotalBE } from '../total-be';
import { HttpClient } from '@angular/common/http';
import { AccountserviceService } from '../accountservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-accounts-da1',
  templateUrl: './all-accounts-da1.component.html',
  styleUrls: ['./all-accounts-da1.component.scss']
})
export class AllAccountsDA1Component implements OnInit {
  accountBE:AccountBE[];
  accountSummary:AccountSummary[];
  totalBE:TotalBE[];
  response:any
  
  //accountBE : AccountBE[]=[];

  
  constructor(private httpClient: HttpClient, private accountserviceService : AccountserviceService, private router: Router)
  {
 
  }
  
  ngOnInit(){

     
   this.httpClient.get("be/allAccounts")
     .subscribe(
       (response)=>
        {
 
         this.response = response; 
         this.accountSummary=this.response;
         //console.log("response :"+ this.response);
        });

        this.httpClient.get("be/data/pu/total")
        //this.httpClient.get("http://localhost:8081/data/pu")
          .subscribe(
            (response)=>
             {
      
              this.response = response; 
              this.totalBE=this.response;
              //this.router.navigateByUrl('allaccounts');
              //console.log("totalBE :"+ this.totalBE);
              
             });
  
  }


/*  ngOnChanges(){

     
    this.httpClient.get("/be/allAccounts")
      .subscribe(
        (response)=>
         {
  
          this.response = response; 
          this.accountSummary=this.response;
          //console.log("response :"+ this.response);
         });
 
         this.httpClient.get("/be/data/pu/total")
         //this.httpClient.get("http://localhost:8081/data/pu")
           .subscribe(
             (response)=>
              {
       
               this.response = response; 
               this.totalBE=this.response;
               
               //console.log("totalBE :"+ this.totalBE);
               
              });
   
   }*/

 
 }