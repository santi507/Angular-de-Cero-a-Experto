import { Injectable } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }

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