import { Component } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;//como funciona esto"?" 

  constructor(private heroService: HeroService, private messageService: MessageService) { }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);//subscribe es un observable que se ejecuta cuando se obtiene la respuesta y se asigna a heroes
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
