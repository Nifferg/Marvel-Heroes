import { Component } from '@angular/core';
import { Heroes } from 'src/app/Interfaces/heroes';
import { HEROES } from 'src/app/Mock-data/mock-heroes';

@Component({
  selector: 'app-heroes-lists',
  templateUrl: './heroes-lists.component.html',
  styleUrls: ['./heroes-lists.component.css']
})
export class HeroesListsComponent {
 heroes = HEROES;

 selectedHero?: Heroes;

 onSelect(hero: Heroes){
  this.selectedHero = hero;
  
 }
}
