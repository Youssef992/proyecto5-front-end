import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Row, Col, Card } from 'react-bootstrap';


const DetailProduct = () => {
  const { productId } = useParams()
  const [productInfo, setProductInfo] = useState({})

  const getProduct = async (id) => {
    const url = `https://proyecto5-backend.herokuapp.com/api/v1/products/${id}`
    const res = await axios.get(url)
    console.log("Hola")
    console.log(res)
    setProductInfo(res.data)
  }

  useEffect(() => {
    getProduct(productId)
  }, [])

  return (
    <>
      <Row>
        <Col lg={3}>
          <div className="product__hero">
            <img width="100%" alt={`${productInfo.title}-img`} src={productInfo.img} className="" />
          </div>
        </Col>
        <Col lg={3}>
          <Card className="product__info mt-3" >
            <Card.Title className=" d-inline-flex">
              <h1 className="product__info-title">
                {productInfo.title}
              </h1>
            </Card.Title>
          </Card>
          <div className="product__info">
            <div className="product__info-director ">
              <h3>SKU: <span>{productInfo.sku}</span> </h3>
              <h4>Precio: <span>{productInfo.unitPrice}</span></h4>
            </div>
            <p className="product__info-description" style={{ fontSize: '1.5rem' }}>
              {productInfo.title}
            </p>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default DetailProduct