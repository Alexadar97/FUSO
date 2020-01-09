import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Router, ActivatedRoute } from '@angular/router';
import { DatatransferService } from '../../services/datatransfer.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  charttype:any
  constructor(private router:Router, private getdata:DatatransferService) { }

  ngOnInit() {

  }
  chartvalue:any
  ChartType(value){
   this.chartvalue = value
  }
  layouttype:any
one(value){
if(this.chartvalue == "" || this.chartvalue == undefined){
  this.getdata.showNotification('bottom', 'right', 'Please Select Chart Type !!', "danger");
}else{
  this.router.navigateByUrl("/components/main-chart")
  this.getdata.charttype = this.chartvalue
  this.getdata.layouttype = value
  localStorage.setItem("charttype",this.chartvalue)
  localStorage.setItem("layouttype",value)
}
}
}
