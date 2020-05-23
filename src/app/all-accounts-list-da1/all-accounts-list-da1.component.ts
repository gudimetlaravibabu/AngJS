import { Component, OnInit } from '@angular/core';
import { AccountBE } from '../account-be';
import { HttpClient } from '@angular/common/http';
import { AccountserviceService } from '../accountservice.service';
import { TotalBE } from '../total-be';

@Component({
  selector: 'app-all-accounts-list-da1',
  templateUrl: './all-accounts-list-da1.component.html',
  styleUrls: ['./all-accounts-list-da1.component.scss']
})
export class AllAccountsListDA1Component implements OnInit {

  response:any;
  accountBE : AccountBE[]=[];
  da : string = 'Ravi';
  totalBE : TotalBE[]=[];
  
  constructor(private httpClient: HttpClient, private accountserviceService : AccountserviceService) { }

  ngOnInit(){

   // this.router.navigate([`class/${classId}/enrollment/${4545455}`]);
 
    this.httpClient.get("be/data/"+this.da)
      .subscribe(
        (response)=>
         {
  
          this.response = response; 
          this.accountBE=this.response;
          this.httpClient.get("be/data/da/total/"+this.da)
         //this.httpClient.get("http://localhost:8081/data/pu")
           .subscribe(
             (response)=>
              {
       
               this.response = response; 
               this.totalBE=this.response;
               console.log("totalBE :"+ this.totalBE);
               
              });
         });
   

         

   }

}