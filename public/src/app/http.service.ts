import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.getAbilities();
}
getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');

    bulbasaur.subscribe(data => console.log("got the pokemon", data['abilities'][0]['ability']['name'], 'and ', data['abilities'][1]['ability']['name']))
}

getAbilities() {
  let chlorophill = this._http.get('https://pokeapi.co/api/v2/ability/34/');

  chlorophill.subscribe(data => { 
    var x = `${data['pokemon'].length}`
    console.log(x, "pokemons that have chlorophill abilities")

      for(let i in data['pokemon']) {
  console.log(data['pokemon'][i].pokemon.name)
  
      }
    }) 
  }
}



