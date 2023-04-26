import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MARVEL HEROES';
  name = 'Kyle Greffin Baguio';
  myhero = 'Iron Man: sakit sa ulo no?';
  myname = 'Kyle: oo par :(';
  currentItem = 'test123';

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string){
    this.items.push(newItem);
  }
}
