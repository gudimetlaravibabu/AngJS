import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-master-data',
  templateUrl: './load-master-data.component.html',
  styleUrls: ['./load-master-data.component.scss']
})
export class LoadMasterDataComponent implements OnInit {

  routes =[
    {label:"DHRTBRToday", url:"dhrtbr"},
    {label:"VolumeToday", url:"volumetoday"},
    {label:"PhcTodayLWD", url:"phctodaylwd"},
    {label:"PhcVolumeTarget", url:"phcvoltarget"}
  ]


  constructor() { }

  ngOnInit() {
  }

}
