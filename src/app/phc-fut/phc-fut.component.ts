import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phc-fut',
  templateUrl: './phc-fut.component.html',
  styleUrls: ['./phc-fut.component.scss']
})
export class PhcFutComponent implements OnInit {

  routes =[
    {label:"PHCProdFuture", url:"PHCProdFuture"},
    {label:"PHCNonProdFuture", url:"PHCNonProdFuture"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
