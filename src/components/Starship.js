import React, { Component } from 'react';
import { Link } from 'react-router';
import './Starship.css';

class Starship extends Component {

  render() {
    const {
      id,
      name,
      model,
      length
    } = this.props.starship;

    return (
      <div className="Starship">
        <div className="Starship-wrapper-content">
          <Link to={`starships/${id}`}><h1>{name}</h1></Link>
          <span>{model}</span>
          <p>Length : {length} (meters)</p>
        </div>
      </div>
    );
  }
}

export default Starship;
