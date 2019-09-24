import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    var options = {
      animationEnabled: true,
      title:{
        text: "Coal Reserves of Countries"   
      },
      axisY:{
        title:"Coal (mn tonnes)"
      },
      toolTip: {
        shared: true,
        reversed: true
      },
      data: [{
        type: "column",
        name: "Anthracite and Bituminous",
        showInLegend: "true",
        yValueFormatString: "#,##0mn tonnes",
        dataPoints: [
          { y: 111338 , label: "USA" },
          { y: 49088, label: "Russia" },
          { y: 62200, label: "China" },
          { y: 90085, label: "India" },
          { y: 38600, label: "Australia" },
          { y: 48750, label: "SA" }
        ]
      }]
    };
    
    $("#chartContainer").CanvasJSChart(options);
    
    
  }

}
