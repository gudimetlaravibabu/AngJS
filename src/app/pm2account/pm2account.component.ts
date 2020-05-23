import { Component, OnInit } from '@angular/core';
import { AccountBE } from '../account-be';
import { HttpClient } from '@angular/common/http';
import { AccountserviceService } from '../accountservice.service';
import { TotalBE } from '../total-be';

@Component({
  selector: 'app-pm2account',
  templateUrl: './pm2account.component.html',
  styleUrls: ['./pm2account.component.scss']
})
export class Pm2accountComponent implements OnInit {
  response:any;
  accountBE : AccountBE[]=[];
  pm : string = 'Tanzeem';
  totalBE : TotalBE[]=[];
  
  constructor(private httpClient: HttpClient, private accountserviceService : AccountserviceService) { }

  ngOnInit(){

   // this.router.navigate([`class/${classId}/enrollment/${4545455}`]);
 
    this.httpClient.get("be/data/pm/"+this.pm)
      .subscribe(
        (response)=>
         {
  
          this.response = response; 
          this.accountBE=this.response;
          this.httpClient.get("be/data/pm/total/"+this.pm)
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
