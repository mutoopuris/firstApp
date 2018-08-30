import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
  <h1>{{appTitle}}</h1>
              <h1>This is main Component</h1>
              <strong>{{title}}</strong>
<app-prod></app-prod>
<app-dash></app-dash></div>
`

})
export class AppComponent {
  title = 'moduleApp';
  appTitle = 'Welcome';
}
