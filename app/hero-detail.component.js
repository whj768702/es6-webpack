import 'rxjs/add/operator/switchMap';

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
    inputs: ['hero'],
    selector: 'my-hero-detail',
    templateUrl: './app/hero-detail.component.html',
    styleUrls: ['./app/hero-detail.component.css']
})

class HeroDetailComponent extends OnInit{
    constructor(){
        super();
        this.hero = new Hero();
        this.heroService = new HeroService();
        this.route = new ActivatedRoute();
        this.location = new Location();
    }
    ngOnInit(){
        this.route.params
            .switchMap((params)=>this.heroService.getHero(+params['id']))
            .subscribe(hero=>this.hero = hero);
    }
    goBack(){
        this.location.back();
    }
}

export {HeroDetailComponent}