import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TruncatePipe } from '../truncate.pipe';
import { AccountSummary } from '../account-summary';
import { TotalBE } from '../total-be';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-accounts-all-tile',
  templateUrl: './accounts-all-tile.component.html',
  styleUrls: ['./accounts-all-tile.component.scss']
})
export class AccountsAllTileComponent implements OnInit {

  @ViewChild('table', {static:false}) table: ElementRef;

   @Input() accountSummary : AccountSummary[];
   @Input() totalBE : TotalBE[];
   response : any;
        
  constructor(private httpClient: HttpClient, private truncatePipe:TruncatePipe) { 
    
  }

  
  ngOnInit() {

    
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

