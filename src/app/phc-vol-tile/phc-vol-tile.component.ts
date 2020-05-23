import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AccountPV } from '../account-pv';
import { TotalPV } from '../total-pv';
import { TruncatePipe } from '../truncate.pipe';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-phc-vol-tile',
  templateUrl: './phc-vol-tile.component.html',
  styleUrls: ['./phc-vol-tile.component.scss']
})
export class PhcVolTileComponent implements OnInit {

  @ViewChild('table', {static:false}) table: ElementRef;

  @Input() accountPV : AccountPV[];
  @Input() totalPV : TotalPV[];
 
  response : any;
  showTextbox:boolean[] = [];
  showUpdatebutton : boolean[] = [];
  showUpdatebuttonflag : boolean = false;
  phcTarget : number[]=[];
  volTarget : number[]=[];
  remarks : string[]=[];
  url:string;
      
  constructor(private httpClient: HttpClient, private truncatePipe:TruncatePipe, private router: Router) { 
    
  }

  ngOnChanges(){

  }

  ngOnInit() {
   
  }

 

  toggleTextbox(i:number)
  {
    
    console.log("pinting textbox before: "+ i +" :value "+  this.accountPV[i].showTextbox);

    if(!this.accountPV[i].showTextbox)
    {
      
      this.accountPV[i].showTextbox = true;
      this.accountPV[i].showUpdatebutton = true;
      this.phcTarget[i] = this.accountPV[i].phcTarget;
      this.volTarget[i] = this.accountPV[i].volTarget;
      this.remarks[i] = this.accountPV[i].remarks;
    
      this.showTextbox[i] = this.accountPV[i].showTextbox;
      this.showUpdatebutton[i] = this.accountPV[i].showUpdatebutton;

     
    }else
    {
      this.accountPV[i].showTextbox = false;
      this.accountPV[i].showUpdatebutton = false;
      this.showTextbox[i] = this.accountPV[i].showTextbox;
      this.showUpdatebutton[i] = this.accountPV[i].showUpdatebutton;
      
    }

    console.log("pinting textbox after: "+ i +" :value "+  this.accountPV[i].showTextbox);
    
  }

  toggleUpdatebutton(){
    
    this.showUpdatebuttonflag = false;
    
    this.accountPV.forEach((p)=>{
      if(p.showUpdatebutton)
      {
      this.showUpdatebuttonflag = true;
      
      
      
      }
    });
    

  }

  updateAcntBENPBE(i:number)
  {
    this.accountPV[i].phcTarget = this.phcTarget[i];
    this.accountPV[i].volTarget = this.volTarget[i];
    this.accountPV[i].remarks = this.remarks[i];
    
  }

  updateDB(){

    this.accountPV.forEach((p)=>{
      
      if(p.showTextbox)
      {
             p.showTextbox = false;
             this.url = 'be/phcvoltarget/'+p.id;
             console.log("url :"+ this.url);
             this.httpClient.put(this.url, p, {
               headers : new HttpHeaders({
                 'Content-Type':'application/json'
               })
             }).subscribe((res)=>
             {
              
               this.httpClient.get("be/phcvol/total")
               .subscribe(
               (response)=>
                {
         
                 this.response = response; 
                 this.totalPV=this.response;
                 this.router.navigateByUrl('allphcvol');
                });
               
             }
             );
             
             
      }      
      
    });

    
  }

  ExportTOExcel()
  {
     /*var blob = new Blob([document.getElementById("exportable").innerText], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
     var fileName = 'PHCVol.xls';
     saveAs(blob, fileName); */

   const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
   const wb: XLSX.WorkBook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
  // /* save to file */
   XLSX.writeFile(wb, 'PHCVol.xlsx');
  

  }
 
   
}

