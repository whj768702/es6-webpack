import { Component, View } from 'angular2/core';

// @Component({
//     selector: 'my-app',
//     template: '<h1>helo {{name}}</h1>'
// })

 // @View({
 //     template: '<h1>Hello {{ name }}</h1>'
 // })

class MyAppComponent {
    constructor() {
        this.name = 'World';
    }
}

MyAppComponent.annotations = [
    new Component({
        selector: 'my-app',
    }),
    new View({
        template: '<h1>hello {{name}}</h1>'
    })
];

export {MyAppComponent};


