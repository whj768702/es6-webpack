import { Component} from '@angular/core';

class Hero{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div>
            <label>id:{{hero.id}}</label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>`
})

class AppComponent {
    constructor() {
        this.title = 'Tour of Heroes';
        this.hero = new Hero(1, 'windstorm');
    }
}

export {AppComponent};
