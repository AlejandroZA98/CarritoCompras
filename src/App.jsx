import { useState } from 'react'
import Product from './components/products'
import Cart from './components/cart'
import { useCart } from './hooks/useCart'
import './App.css'

function App() {
  const {data,addToCart,cart,isEmpty,removeToCart,increseQuantity,decreseQuantity,getTotal,cleanCart}=useCart()


  return (
    <>
     <header>
        <h1>Shopping Cart</h1>
     </header>
      <main>
        <section className="products">

        {
          data.map((product)=>
            <Product
            key={product.id}
            product={product}
            addToCart={addToCart}/>

          )
        }
      </section>

      <section className="cart">
         <Cart
         cart={cart}
         isEmpty={isEmpty}
         removeToCart={removeToCart}
         increseQuantity={increseQuantity}
         decreseQuantity={decreseQuantity}
         getTotal={getTotal}
         cleanCart={cleanCart}
         />
      </section>
      </main>
    </>
  )
}

export default App
