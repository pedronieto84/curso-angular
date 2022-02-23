import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
@Component({
  selector: 'lib-login-icaro2302',
  template: `
    <div>
      Email 15<input #email type="text" >
      Password<input #password type="password" >
      <button (click)="enviar(email.value, password.value)">ENVIAR</button>
</div>
<div>
  
<google-chart *ngIf="dataChart; else loading" [data]="pieChart"></google-chart></div>

<ng-template #loading>LOADING</ng-template>
  `,
  styles: [
  ]
})
export class LoginIcaro2302Component implements  OnChanges {

  @Input() dataChart!: (string | number)[][]

  ngOnChanges(changes: SimpleChanges): void {
      if(changes){
        console.log(this.dataChart);
        this.pieChart = {
          chartType: GoogleChartType.PieChart,
          dataTable: this.dataChart,
          //firstRowIsData: true,
          options: {'title': 'Tasks'},
        }
      }
  }
  
  public pieChart!: GoogleChartInterface;

  nombre = 'juan'
  enviar(email:string, password:string){
    console.log(email, password);
  }
  

}
