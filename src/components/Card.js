import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <ul>
        <li><strong>Technologies:</strong> {props.technologies}</li>
        <li><strong>Features:</strong> {props.features}</li>
        <li>
          <strong>GitHub:</strong>
          <a href="https://github.com/yourusername/mern-todo-app" target="_blank" rel="noopener noreferrer">
            GitHub Link
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Card; // Make sure to include this export
