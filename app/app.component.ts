import { Component } from '@angular/core';
import componentTemplate from './app.component.html';
import './app.component.scss!';

@Component({
    selector: 'my-app',
    template: componentTemplate
})
export class AppComponent {
    private foo:String = 'Bar';

    constructor() {

    }

    test() {

    }

}