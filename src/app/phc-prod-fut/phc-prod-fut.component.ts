import { Component, OnInit } from '@angular/core';
import { PhcEmpData } from '../phc-emp-data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-phc-prod-fut',
  templateUrl: './phc-prod-fut.component.html',
  styleUrls: ['./phc-prod-fut.component.scss']
})
export class PhcProdFutComponent implements OnInit {

  response:any;
  phcEmpData : PhcEmpData[]=[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get("be/prodfut")
    .subscribe(
      (response)=>
       {

        this.response = response; 
        this.phcEmpData=this.response;
        
      
       });
 

       

 

  }

}
