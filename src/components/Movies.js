import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-stars'

const Movies = ({film}) => {
  return (
    <div className='aflem' >
    <Card style={{ width: '18rem',height:"600px" }}>
      <Card.Img variant="top" src={film.posterUrl} style={{height:"400px"}} />
      <Card.Body>
        <Card.Title> {film.title} </Card.Title>
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
   
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    
    </div>
  )
}

export default Movies