import '../node_modules/reflect-metadata/Reflect.js';
import '../node_modules/zone.js/lib/zone.js';
import '../node_modules/es6-shim';
import {Component, View, bootstrap} from '../node_modules/angular2/angular2';

@Component({
    selector: 'my-app'
})

@View({
    template: '<h1>Hello {{ name }}</h1>'
})

class MyAppComponent {
    constructor() {
        this.name = 'World';
    }
}

bootstrap(MyAppComponent);