import React from "react";
import Ilumninacion from '../../imgs/iluminacion.jpg'
const Jumbotron = () => {

    return (<>
        <div class="jumbotron" style={{textAlign:"center",height:"300px", backgroundImage: `url(${Ilumninacion})` }}>
            <h1 class="display-4">Bienvenidos</h1>
            <p class="lead">En general de productos tenemos lo que tu necesitas!</p>
            <hr class="my-4" />
            <p>CONSULTA NUESTRO.....</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="products" >Catálogo de Productos</a>
            </p>

        </div>
    </>)
}

export default Jumbotron 