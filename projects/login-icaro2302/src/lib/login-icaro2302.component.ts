import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
@Component({
  selector: 'lib-login-icaro2302',
  template: `
    <div>
      Email 4<input #email type="text" >
      Password<input #password type="password" >
      <button (click)="enviar(email.value, password.value)">ENVIAR</button>
</div>
<div><google-chart [data]="pieChart"></google-chart></div>
  `,
  styles: [
  ]
})
export class LoginIcaro2302Component  {

  public pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     1],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    //firstRowIsData: true,
    options: {'title': 'Tasks'},
  };

  nombre = 'juan'
  enviar(email:string, password:string){
    console.log(email, password);
  }
  

}
