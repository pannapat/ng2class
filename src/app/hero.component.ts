import { Component } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';
@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent {
    title = 'Hero!!!';
    hero: Hero = { id: 1, name: 'Wonder Woman' };
    heroes: Hero[] = HEROES;

    changeHero(hero: Hero) {
        this.hero = hero;
    }
}
