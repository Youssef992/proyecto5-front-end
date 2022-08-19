import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Cart = () => {

    const [products, setProducts] = useState([])
    const getProducts = async () => {
        const url = 'https://proyecto5-backend.herokuapp.com/api/v1/products'
        const response = await axios.get(url)
        // axios.get(url)
        //   .then((res) => console.log(res))
        console.log("Hola")
        console.log(response)
        setProducts(response.data)
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (<>
        <div className=" container">
            <h3 className="card-title">Checkout</h3><hr />
            {products.map((product, index) =>
                <div key={index}>
                    <p>{product.title}</p><hr />
                </div>
            )} <hr />
            {products.length ?
                <div><h4><small>Total Amount:</small><span className="float-right text-primary">
                   </span></h4><hr /></div> : ''}
            {!products.length ? <h3 className="text-warning">No item on the cart</h3> : ''}
            {products.length ? <button className="btn btn-success float-right">Pay</button> : ''}
            <Link to="/"><button className="btn btn-danger float-right"
                style={{ marginRight: "10px" }}>Cancel</button></Link><br /><br /><br />
        </div>
    </>)
}

export default Cart