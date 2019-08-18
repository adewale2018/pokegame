import React, { Component } from 'react';
import './Pokecard.css';

// const POKECARD_BASE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
const POKECARD_BASE_URL = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

let padToThree = number => (number <= 999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component {
  render() {
    let theId = this.props.id;
    let newId = padToThree(theId);
    let imgSrc = `${POKECARD_BASE_URL}${newId}.png`; 
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-title">{this.props.name}</h2>
        <div className="Pokecard-img">
          <img src={imgSrc} alt={this.props.name} />  
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
