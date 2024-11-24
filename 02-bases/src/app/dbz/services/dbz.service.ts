import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }

    public characters: Character[] = [
        {
          id: uuid(),
          name: 'Krillin',
          power: 1000,
        },
        {
          id: uuid(),
          name: 'Goku',
          power: 9500,
        },
        {
          id: uuid(),
          name: 'Trunks',
          power: 5000,
        },
    ];
    
    public onNewCharacter(character: Character) {
        this.characters.push(character);
    }
    
    public onDeleteCharacter(index: number) {
        this.characters.splice(index, 1);
    }

    public deleteCharacterById(id: string) {
        this.characters = this.characters.filter(character => character.id !== id);
    }
    
}