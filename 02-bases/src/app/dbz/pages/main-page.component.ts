import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Trunks',
      power: 5000,
    },
  ];

  public onNewCharacter(character: Character) {
    console.log({character});
    this.characters.push(character);
    console.log(this.characters);
  }

  public onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);
  }

}
