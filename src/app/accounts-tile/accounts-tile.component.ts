import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AccountBE } from '../account-be';
import { TotalBE } from '../total-be';
import { TruncatePipe } from '../truncate.pipe';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-accounts-tile',
  templateUrl: './accounts-tile.component.html',
  styleUrls: ['./accounts-tile.component.scss']
})
export class AccountsTileComponent implements OnInit {

  @ViewChild('table', {static:false}) table: ElementRef;

  @Input() accountBE : AccountBE[];
  @Input() totalBE : TotalBE[];
  response : any;
  showRemarks:boolean=false;
  showRemarksText:string="Expand";
  textRemarks:string;
  showTextbox:boolean[] = [];
  //showTextbox1:boolean = true;
  npBE : number[]=[];
  pmBE : number[]=[];
  rtb : number[]=[];
  remarks : string[]=[];
  summary : string[]=[];
  showUpdatebutton : boolean[] = [];
  showUpdatebuttonflag : boolean = false;
  //showTrack:boolean = false;
  url:string;
      
  constructor(private httpClient: HttpClient, private truncatePipe:TruncatePipe, private router: Router) { 
    //this.accountBE = this.accountBE;
  }

  ngOnChanges(){
   
    this.accountBE.forEach(p => {
     if(p.remarks!=null)
      {
      p.remarks=this.truncatePipe.transform(p.remarks,30); 
      
     // this.textRemarks.push(p.remarks);
      }

    });
  }

  ngOnInit() {
   
  }

  toggleSummary(i:number)
  {
    
    if(this.accountBE[i].remarks!=null)
    {
      if(!this.accountBE[i].showsummary){
      this.accountBE[i].remarks= this.accountBE[i].summary;
      this.accountBE[i].showsummary=true;
      this.textRemarks=this.accountBE[i].remarks;
     }else{
      
     // this.accountBE[i].summary=this.accountBE[i].remarks
      this.accountBE[i].remarks=this.truncatePipe.transform(this.accountBE[i].remarks,30); 
      this.accountBE[i].showsummary=false;
      this.textRemarks=this.accountBE[i].remarks;
     }
    }
  }

   toggleRemarks() {
    
    if(!this.showRemarks)
    {
        this.accountBE.forEach(p => {
          if(p.remarks!=null)
          p.remarks=p.summary;
          this.showRemarksText="Collapse";
          this.showRemarks=true;
        });
    }else{
      this.accountBE.forEach(p => {
        if(p.remarks!=null){
        p.remarks=this.truncatePipe.transform(p.remarks,30);
       // this.textRemarks=p.remarks;
        }
        this.showRemarksText="Expand";
        this.showRemarks=false;
      });
    }
    
  }

  toggleTextbox(i:number)
  {
    //console.log("number :"+ i);
    //console.log("outside :"+ this.accountBE[i].showTextbox);
    if(!this.accountBE[i].showTextbox)
    {
      
      this.accountBE[i].showTextbox = true;
      this.accountBE[i].showUpdatebutton = true;
      //console.log("inside :"+ this.accountBE[i].showTextbox);
      this.npBE[i] = this.accountBE[i].npBE;
      this.pmBE[i] = this.accountBE[i].pmBE;
      this.rtb[i] = this.accountBE[i].rtb;
      this.remarks[i] = this.accountBE[i].remarks;
      this.summary[i] = this.accountBE[i].remarks;
      this.showTextbox[i] = this.accountBE[i].showTextbox;
      this.showUpdatebutton[i] = this.accountBE[i].showUpdatebutton;

      console.log("toggleTextbox.remarks"+this.accountBE[i].remarks);
      console.log("toggleTextbox.summary"+this.accountBE[i].summary);

      //this.accountBE[i].npBE =this.npBE[i];
      //console.log("inside npBE:"+ this.npBE[i]);
      //this.showTextbox1 = false;
     
    }else
    {
      this.accountBE[i].showTextbox = false;
      this.accountBE[i].showUpdatebutton = false;
      this.showTextbox[i] = this.accountBE[i].showTextbox;
      this.showUpdatebutton[i] = this.accountBE[i].showUpdatebutton;
      //this.npBE[i] = null;
      //this.showUpdatebutton = false;
      //this.showTextbox1 = true;
    }

    
    
  }

  toggleUpdatebutton(){
    
    this.showUpdatebuttonflag = false;
    this.accountBE.forEach((p)=>{
      if(p.showUpdatebutton)
      {
      this.showUpdatebuttonflag = true;
      
      console.log("button flag value"+ this.showUpdatebuttonflag);
      }
    });
    

  }

  updateAcntBENPBE(i:number)
  {
    this.accountBE[i].npBE = this.npBE[i];
    this.accountBE[i].pmBE = this.pmBE[i];
    this.accountBE[i].rtb = this.rtb[i];
    this.accountBE[i].remarks = this.remarks[i];
    this.accountBE[i].summary = this.remarks[i];
    console.log("updateAcntBENPBE.remarks"+this.accountBE[i].remarks);
    console.log("updateAcntBENPBE.summary"+this.accountBE[i].summary);
  }

  updateDB(){

    this.accountBE.forEach((p)=>{
      
      if(p.showTextbox)
      {
        
             this.url = 'be/data/pu/'+p.id;
           
             this.httpClient.put(this.url, p, {
               headers : new HttpHeaders({
                 'Content-Type':'application/json'
               })
             }).subscribe((res)=>
             {
               
               this.httpClient.get("be/data/pu/betotal")
               .subscribe(
               (response)=>
                {
         
                 this.response = response; 
                 this.totalBE=this.response;
               
                 this.router.navigateByUrl('allaccounts');
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
       XLSX.writeFile(wb, 'BERTBR.xlsx');
  }

   
}

