import { Component } from '@angular/core';
import componentTemplate from './app.component.html';
import './app.component.scss!';
import { environment } from './environments/environment';

@Component({
    selector: 'my-app',
    template: componentTemplate
})
export class AppComponent {
    private hiContrast:Boolean = false;

    constructor() {
        console.log("Production " + environment.production);
    }

    public setHiContrast(hiContrast: Boolean) {
        this.hiContrast = hiContrast;
    }

    public getHiContrast() : Boolean {
        return this.hiContrast;
    }

}