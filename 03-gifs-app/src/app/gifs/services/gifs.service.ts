import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagHistory: string[] = [];

  constructor() { }

  get tagsHistory(): string[] {
    return [...this._tagHistory];
  }

  searchTag(tag: string): void {
    this._tagHistory.unshift(tag);
    console.log(this.tagsHistory);
    
  }

}
