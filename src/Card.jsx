import React from 'react'

const Card = ({el}) => {
  return (
    <div className='card'>
      <h1>id:{el.id}</h1>
      <h2>name:{el.name}</h2>
      <h2>email:{el.email}</h2>
    </div>
  )
}

export default Card
