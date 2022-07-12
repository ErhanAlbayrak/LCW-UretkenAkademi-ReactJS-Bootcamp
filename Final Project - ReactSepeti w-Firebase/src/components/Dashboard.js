import '../App.css';
import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import Footer from './Footer';
import data from '../data';  
import {useState} from 'react';
import Navbar from './Navbar';



function Dashboard() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    debugger;
    const exist = cartItems.find(x=> x.id === product.id);
    if(exist){
      setCartItems(
        cartItems.map((x)  =>
        x.id === product.id ? {...exist, qty: exist.qty +1} : x
        )
        );
    } else {
      setCartItems([...cartItems,{...product,qty : 1}]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find(x=> x.id === product.id);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter(x=> x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
        x.id === product.id ? {...exist, qty: exist.qty -1} : x
      )
      );
    }
  }
  return (
    <div className="Dashboard">      
      <Navbar countCartItems={cartItems.length}></Navbar>
      <Header></Header>
      <div className="raw">   
      <Main onAdd={onAdd} products={products}></Main>

      <Basket  

      onAdd={onAdd} 
      onRemove={onRemove} 
      cartItems={cartItems}>

      </Basket>
     </div>
     <Footer></Footer>
    </div>
  );
}

export default Dashboard;