import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>Hello {{ name }}</h1>'
})

class MyAppComponent {
    constructor() {
        this.name = 'World';
    }
}

export {MyAppComponent};


