import React from 'react'
import './card.styles.css'

export const Card = (props) => {
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${props.robo.id}?set=set1`} alt='' />
      <h2>{props.robo.name}</h2>
      <p>{props.robo.company.catchPhrase}</p>
    </div>
  )
}
