import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/heroes.component.html',
    styleUrls: ['./app/heroes.component.css']
})

class HeroesComponent extends OnInit{
    constructor() {
        super();
        this.heroService = new HeroService();
        this.heroes;
        this.selectedHero;
        this.router = new Router();
        // this.router;
    }
    onSelect(hero){
        this.selectedHero = hero;
    }
    getHeroes(){
        this.heroService.getHeroes().then(heroes => this.heroes=heroes);
        // this.heroService.getHeroesSlowly().then(heroes => this.heroes=heroes);
    }
    gotoDetail(){
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
    ngOnInit(){
        this.getHeroes();
    }
}

export {HeroesComponent};
