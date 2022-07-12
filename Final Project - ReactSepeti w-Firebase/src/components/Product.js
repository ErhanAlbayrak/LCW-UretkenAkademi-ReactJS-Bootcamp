import React from 'react';


export default function Product(props) {
    const {product, onAdd}= props;
  return (
    <div class="col-md-4 photo-margin">
        <img className="small" src={product.image} alt={product.name}></img>
        <h3  className="wite">{product.name}</h3>
        <div className="wite">${product.price}</div>
        <div>
            <button className="btn btn-secondary rounded-pill" onClick={()=> onAdd(product)}>
                Sepete Ekle
                </button>
        </div>
    </div>
  )
}
