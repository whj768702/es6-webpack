import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    // moduleId: module.id,
    selector: 'my-dashboard',
    // template: '<h3>My Dashboard</h3>',
    templateUrl: './app/dashboard.component.html',
    styleUrls: ['./app/dashboard.component.css']
})

class DashboardComponent extends OnInit{
    constructor(){
        super();
        this.heroes;
        this.heroSerivce = new HeroService();
    }
    ngOnInit(){
        this.heroSerivce.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

}

export {DashboardComponent}