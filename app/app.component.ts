import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><p>{{foo}}</p>'
})
export class AppComponent {
    private foo:String = 'Bar';
}