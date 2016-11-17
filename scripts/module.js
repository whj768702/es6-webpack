import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>'
})

class AppComponent {
    constructor() {
        this.title = 'Tour of Heroes';
        this.hero = 'windstorm';
    }
}

export {AppComponent};


