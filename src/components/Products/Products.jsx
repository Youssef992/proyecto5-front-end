import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import axios from 'axios'
import Product from '../Product/Product'
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {

  const [productsState, setProductsState] = useState([])
  const getProducts = async () => {
    const url = 'https://proyecto5-backend.herokuapp.com/api/v1/products'
    const response = await axios.get(url)
    // axios.get(url)
    //   .then((res) => console.log(res))
    console.log("Hola")
    console.log(response)
    setProductsState(response.data)
  }

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <div>
      <Row lg={3} md={4} sm={6} xs={12} className="mt-3" >
        {
          productsState.map((info, index) => {
            return <Product data={info} key={index} />
          })
        }
      </Row>
    </div>
  )
}

export default Products