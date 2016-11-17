import { Component} from '@angular/core';

class Hero{
    constructor(id, name){
        this.id = id || null;
        this.name = name || null;
    }
}

const HEROES =[
    { id: 11, name: 'zhang san' },
    { id: 12, name: 'li si' },
    { id: 13, name: 'wang wu' },
    { id: 14, name: 'zhao liu' },
    { id: 15, name: 'zhou qi' },
    { id: 16, name: 'wu ba' },
    { id: 17, name: 'zheng jiu' },
    { id: 18, name: 'qian shi' },
    { id: 19, name: 'sun 11' },
    { id: 20, name: 'Jack Ma' }
];

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span>{{hero.name}}
            </li> 
        </ul>
        <div *ngIf="selectedHero">
        <h2>{{selectedHero.name}} details!</h2>
            <div>
                <label>id:{{selectedHero.id}}</label>
                <input [(ngModel)]="selectedHero.name" placeholder="name"/>
            </div>
        </div>`,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `]
})

class AppComponent {
    constructor() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
        this.selectedHero;
    }
    onSelect(hero){
        this.selectedHero = hero;
    }
}

export {AppComponent};
