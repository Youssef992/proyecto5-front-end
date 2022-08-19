import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const Product = ({ data }) => {

    return (
        <Card style={{ width: '18rem', minHeight: '18rem' }}>
          <Card.Img variant="top" src={data.img} />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
              {data.title.substring(0, 85)}...
            </Card.Text>
            <Link to={`/${data._id}`}>
              <Button variant="primary">Más Información</Button>
            </Link>
          </Card.Body>
        </Card>
      )
}

export default Product