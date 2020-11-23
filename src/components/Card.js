import React from 'react';

function Card({texto, titulo, imagem}) {
    return (
        <div className="card m-4" style={{width: "18rem"}}>
            <img className="card-img-top" src={imagem} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{texto}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;