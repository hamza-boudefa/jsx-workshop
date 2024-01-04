import React from 'react'
import Movies from './Movies'

const MovieList = ({aflem,search,rate}) => {
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:'center'}}>
    {aflem.filter((elF)=> elF.rate>=rate && elF.title.toLowerCase().includes(search)).map((film)=> <Movies film={film} /> )}

    </div>
  )
}

export default MovieList