import React from 'react'
import Iframe from 'react-iframe'
import { useParams } from 'react-router-dom'

const Trailer = ({aflem}) => {
    const {id}=useParams()
    const movie=aflem.find((el)=>el.id==id)
    console.log(movie)
  return (
    <div>
    <Iframe width='1280' height='720' src={movie.trailer} >  </Iframe>
    </div>
  )
}

export default Trailer