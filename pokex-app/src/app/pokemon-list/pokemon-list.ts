import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  imports: [FormsModule, NgClass],
 selector: 'app-pokemon-list',
 //imports: [],
 templateUrl: './pokemon-list.html',
 styleUrl: './pokemon-list.css'
})
export class PokemonList {
  //pokemons = [
 //{ name: 'Pikachu', type: 'Electric' },
 //{ name: 'Charmander', type: 'Fire' },
 //{ name: 'Squirtle', type: 'Water' },
 //{ name: 'Bulbasaur', type: 'Grass' },
 //{ name: 'lucario', type: 'Fighting' },
 //{ name: 'Jigglypuff', type: 'Fairy' },
 //{ name: 'Stouland', type: 'Normal' }

// ];
initialPokemons = [
 {
 name: 'Pikachu',
 type: 'Electric',
 level: 1,
 image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
 },
 {
 name: 'Charmander',
 type: 'Fire',
 level: 15,
 image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
 },
 {
 name: 'Squirtle',
 type: 'Water',
 level: 25,
 image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
 },
 {
 name: 'Bulbasaur',
 type: 'Grass',
 level: 5,
 image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
 }
];

pokemons = [...this.initialPokemons];
 removePokemon(name: string) {
 this.pokemons = this.pokemons.filter(pokemon => pokemon.name !== name);
}

resetPokemons() {
 this.pokemons = [...this.initialPokemons];
}

newPokemonName = '';
newPokemonType = '';
newPokemonLevel = 1;
addPokemon() {
 if (this.newPokemonName.trim() === '' || this.newPokemonType.trim() === '') {
 return;
 }
 this.pokemons.push({
 name: this.newPokemonName,
 type: this.newPokemonType,
 level: this.newPokemonLevel,
 image: ''
 });
 this.newPokemonName = '';
 this.newPokemonType = '';
 this.newPokemonLevel = 1;
}

}
