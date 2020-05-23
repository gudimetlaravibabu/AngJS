import { Component, OnInit } from '@angular/core';
import { PhcEmpData } from '../phc-emp-data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-phc-non-prod-fut',
  templateUrl: './phc-non-prod-fut.component.html',
  styleUrls: ['./phc-non-prod-fut.component.scss']
})
export class PhcNonProdFutComponent implements OnInit {
  response:any;
  phcEmpData : PhcEmpData[]=[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get("be/nonprodfut")
    .subscribe(
      (response)=>
       {

        this.response = response; 
        this.phcEmpData=this.response;
        
      
       });
 

       

 

  }

}
