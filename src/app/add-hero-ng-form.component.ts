import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from './hero';
import { HeroesService } from './heroes.service';
@Component({
    selector: 'app-add-hero-ng-form',
    templateUrl: 'add-hero-ng-form.component.html'
})
export class AddHeroNgFormComponent implements OnInit {
    hero: Hero;
    @Input()
    heroList: Hero[];

    constructor(private heroesService: HeroesService) {
        this.heroList = heroesService.getHeroes();
    }

    ngOnInit() {
        this.hero = new Hero();
    }

    add(form: NgForm) {
        console.log(form.value);
        // this.heroList.push({ name: form.value.name, id: form.value.id });
        console.log(this.hero);
        this.heroList.push(this.hero);
        this.hero = new Hero();
    }
}
