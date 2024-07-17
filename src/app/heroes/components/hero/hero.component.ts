import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  // Luce como una propiedad porque se usan como si lo fueran
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  // Cambia el nombre del héroe
  changeHero():void {
    this.name = 'Capitán América';
  }

  changeAge():void {
    this.age = 80;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }
}
