import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ReactStars from 'react-stars'

const Movies = ({film}) => {
  return (
    <div className='aflem' >
    <Card style={{ width: '18rem',height:"600px" }}>
      <Card.Img variant="top" src={film.posterUrl} style={{height:"400px"}} />
      <Card.Body>
        <Card.Title> {film.title} </Card.Title>
        <LinkContainer to={`/movie/${film.id}`} >
        <Button variant="primary">Trailer</Button>
</LinkContainer>
        <Card.Text style={{overflowY:"scroll", height:"90px"}} >
         {film.description}
        </Card.Text>
        <ReactStars
  count={5}
  // onChange={ratingChanged}
  value={film.rate}
  edit={false}
  size={24}
  color2={'#ffd700'} />
   
      </Card.Body>
    </Card>
    
    </div>
  )
}

export default Movies