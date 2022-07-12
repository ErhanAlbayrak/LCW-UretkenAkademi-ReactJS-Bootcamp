import React from 'react';
import Product from './Product';

export default function Main(props){
    const {products, onAdd} = props;
    return (
        <main className="bluck cal-2">   
            
            <h2 className="wite"><hr className='wite'></hr>Shop All Proudcts<hr className='wite'></hr></h2>

            <div className="raw align-cent">
                {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
    </main> 
    )
   
}