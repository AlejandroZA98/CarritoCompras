import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header>
    <h1>Shopping Cart</h1>
  </header>
  <main>
    <section class="products">
      <h2>Products</h2>
      <div class="product">
        <span>Product 1</span>
        <button onclick="addToCart('Product 1', 10.99)">Add to Cart - $10.99</button>
      </div>
      <div class="product">
        <span>Product 2</span>
        <button onclick="addToCart('Product 2', 15.99)">Add to Cart - $15.99</button>
      </div>
      <div class="product">
        <span>Product 3</span>
        <button onclick="addToCart('Product 3', 8.99)">Add to Cart - $8.99</button>
      </div>
    </section>

    <section class="cart">
      <h2>Shopping Cart</h2>
      <div id="cart-items">
        <p>Your cart is empty.</p>
      </div>
      <div class="total" id="total-price">Total: $0.00</div>
      <button class="checkout" onclick="checkout()">Checkout</button>
    </section>
  </main>
    </>
  )
}

export default App
