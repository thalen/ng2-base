import { Component } from '@angular/core';
import componentTemplate from './app.component.html';
import componentStyle from './app.component.scss';

@Component({
    selector: 'my-app',
    template: componentTemplate
})
export class AppComponent {
    private foo:String = 'Bar';
    private bar:String = componentStyle;

    constructor() {
        console.log(componentStyle)
    }

    test() {
        let x = 6;
        return 0;
    }

}