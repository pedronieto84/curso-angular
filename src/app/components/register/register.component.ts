import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit, AfterViewInit, OnChanges, AfterViewChecked, OnDestroy {

  @Input() mensaje:string = ''

  constructor(private data: DataService) {
    // Primero se Instancia el sonctructor
    // Es de Javascript
    console.log('Constructor'); 
   }

   ngOnInit(){
     // El primer lifecycle hoook controlado de angular, aún no existe el Html
     // Se pueden iniciar variables o nos podemos subscribir a eventos o definir la programación reactiva

     // Diferencias https://medium.com/zurvin/cu%C3%A1l-es-la-diferencia-entre-ngoninit-y-constructor-en-angular-2f7ce3d986b7#:~:text=ngOnInit%20es%20propio%20de%20angular,est%C3%A1%20listo%20para%20darle%20uso.&text=Otros%20recomiendan%20usar%20el%20constructor,dejar%20el%20resto%20para%20ngOnInit.

     console.log('ngOnINit');
   }

   ngAfterViewInit(){
     // Cuando ya existe html y queremos manipular el DOM
     console.log('afterViewInit');
   }

   ngAfterViewChecked(): void {
     console.log('after View Checked');
   }
   ngOnChanges(changes:SimpleChanges){
     // Cada vez que cambia el input
     // Cuidado esto puede afectar al performance. Mirar el metodo onPush en los dumb components
     // El objeto changes me devuelve la propiedad currentValue, previousValue y firstChange
    console.log('on Changes', changes);
   }

   ngOnDestroy(): void {
    // Si me hubiera subscrito, aqui debo hacer unsubscribe y resetear variables o arrays en caso de que fuera necesario 
    console.log('On Destroy');

   }
  

}
