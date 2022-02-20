import { Component } from '@angular/core';

interface RouteObject  {
  url:string
  displayName:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-angular';

  routesArray: RouteObject[] = [
    {
      url: '/',
      displayName: 'Basic'
    },
    {
      url: '/array',
      displayName: 'Array'
    },
    {
      url: '/nested',
      displayName: 'Nested'
    },
    {
      url: '/submit',
      displayName: 'Submit'
    },
    {
      url: '/valid',
      displayName: 'Valid'
    },
  ]
}
