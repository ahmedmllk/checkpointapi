import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
const CardList = () => {
  const [users, setusers] = useState([])
  useEffect(() => {
    (async()=>{
        try{
            let result=await axios.get('https://jsonplaceholder.typicode.com/users')
            setusers(result.data)
        } catch(error){
            console.error(error);
        }
      })()
  }, [])
  
  return (
    <div className='cardlist'>
      {users.map(el=><Card el={el}/>)}
    </div>
  )
}

export default CardList
