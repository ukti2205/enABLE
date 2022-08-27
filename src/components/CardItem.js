import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css';

function CardItem(props){
    return (
      <div className="card text-center">
      <div className="overflow">
      <img src=
      {props.imgsrc} alt='Image 1'  className='card-img-top' />

      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text text-secondary'>
          {props.content}
        </p>
      </div>
    </div>
    )
}
export default CardItem