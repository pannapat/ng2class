import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { Hero } from './hero';
import { HeroesService } from './heroes.service';

@Component({
    selector: 'app-add-hero',
    templateUrl: './add-hero.component.html'
})
export class AddHeroComponent {
    @Input()
    heroList: Hero[];

    public addHeroForm = new FormGroup({
        name: new FormControl('batman', Validators.required),
        id: new FormControl('77', Validators.required)
    });

    constructor(public fb: FormBuilder, private heroesService: HeroesService) {
        this.heroList = heroesService.getHeroes();
    }

    doAdd(event) {
        console.log(event);
        console.log(this.addHeroForm.value);
        let newHero: Hero = new Hero();
        newHero.name = this.addHeroForm.value.name;
        newHero.id = this.addHeroForm.value.id;
        this.heroList.push(newHero);
    }
}
