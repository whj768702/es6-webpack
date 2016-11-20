import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService{
    getHeroes(){
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly(){
        return new Promise(resolve=>setTimeout(resolve, 2000)).then(()=>this.getHeroes());
    }
    getHero(id){
        return this.getHeroes()
                   .then(heroes => heroes.find(hero => hero.id === id));
    }
}
