import { Component, View } from 'angular2/core';

@Component({
    selector: 'my-app'
})

@View({
    template: '<h1>Hello123 {{ name }}</h1>'
})

class MyAppComponent {
    constructor() {
        this.name = 'World';
    }
}

// MyAppComponent.annotations = [
//     new Component({
//         selector: 'my-app',
//     }),
//     new View({
//         template: '<h1>hello {{name}}</h1>'
//     })
// ];

export {MyAppComponent};


