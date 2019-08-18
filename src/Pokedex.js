import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  render() {
    let title;
    if(this.props.isWinner) {
      title = <h3 className="Pokedex-win">Congrats!, YOU WON!!!</h3>
    } else {
      title = <h3 className="Pokedex-lose">Ooops!!!, TRY AGAIN...</h3>
    }

    return (
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        
        <div className="Pokedex-cards">
        {this.props.pokemon.map(p => (
          <Pokecard 
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
            key={p.id}
          />
        ))}
        </div>
      </div>
    )
  }
}

export default Pokedex;
