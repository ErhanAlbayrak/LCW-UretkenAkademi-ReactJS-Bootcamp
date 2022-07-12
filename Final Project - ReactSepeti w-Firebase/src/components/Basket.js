import React from 'react';
import {logout} from './firebase'

export default function Basket(props){
    const {cartItems, onAdd,onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    debugger;
    return (
        <aside className="bluck cal-1">
            <h2 className="wite"><hr className='wite'></hr>Cart Items<hr className='wite'></hr></h2>            
            <div className="wite" >
                {cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            {cartItems.map((item)=>(
                <div key={item.id} className="raw">
                    <div className='cal-2 wite'> {item.name}</div>
                    
                    <div className='cal-2'>
                        <button onClick={()=> onAdd(item)} className="add">
                            +
                            </button>
                        <button onClick={()=> onRemove(item)} className="remove">
                            -
                            </button>    
                        </div>
                        <div className='cal-2 text-right wite'>
                        {item.qty} x  ${item.price.toFixed(2)}
                        </div>
                        
                    </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                <hr className="wite"></hr>
                <div className="raw  wite">
                    <div className="cal-2"> Items Price</div>
                    <div className="cal-1 text-right"> ${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="raw wite">
                    <div className="cal-2"> Tax Price</div>
                    <div className="cal-1 text-right"> ${taxPrice.toFixed(2)}</div>
                </div>
                <div className="raw wite">
                    <div className="cal-2"> Shipping Price</div>
                    <div className="cal-1 text-right"> ${shippingPrice.toFixed(2)}</div>
                </div>
                <div className="raw wite">
                    <div className="cal-2"> <strong>Total Price</strong></div>
                    <div className="cal-1 text-right"> ${totalPrice.toFixed(2)}</div>
                </div>
                <hr/>
                <div>
                    <button className="btn btn-secondary rounded-pill" onClick={()=> alert('Sipariş tamamlandı. İyi çalışmalar!')}>
                        Siparişi Tamamla
                    </button>
                </div>
                </>
                
            )}
        </aside>
    );
}