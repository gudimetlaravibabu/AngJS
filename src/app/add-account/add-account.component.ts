import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountserviceService } from '../accountservice.service';
import { AccountPV } from '../account-pv';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {
  response:any;
  @Input() DM: any;
  @Input() DA: any;
  @Input() Account: any;
  accountPV : AccountPV;
  

  constructor(private httpClient: HttpClient, private accountserviceService : AccountserviceService, private router: Router)
  {
 
  }

  ngOnInit() {
  }


  addAccount(){

             this.httpClient.post("be/addaccount", this.accountPV, {
               headers : new HttpHeaders({
                 'Content-Type':'application/json'
               })
             }).subscribe((res)=>{ });
            }
}
             
             
      


