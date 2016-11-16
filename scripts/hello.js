import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>Hello</h1> <my-world></my-world>'
})

class MyAppComponent {
    constructor() {
        this.name = 'World';
    }
}

export {MyAppComponent};


