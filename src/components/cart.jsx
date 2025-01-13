export default function Cart({cart,isEmpty,removeToCart,increseQuantity,decreseQuantity,getTotal,cleanCart}){
    return(
        <>
        <h2>Shopping Cart</h2>
        <div id="cart-items">{isEmpty?(      
            <p>Your cart is empty.</p>):(  <table className="w-100 table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(product=>(
                            // key es una clave unica para evitar errores
                            <tr key={product.id}> 
                               
                                <td>{product.name}</td>
                                <td className="">
                                        ${product.price}
                                </td>
                                <td className="">
                                    <button
                                        type="button"
                                        className=""
                                        onClick={() =>decreseQuantity(product.id)}
                                    >
                                        -
                                    </button>
                                        {product.quantity}
                                    <button
                                        type="button"
                                        className=""
                                        onClick={()=>increseQuantity(product.id)}

                                    >
                                        +
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className=""
                                        type="button"
                                        onClick={()=>removeToCart(product.id)}
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table> )
        
        
        }
      
        </div>
        <div className="total" id="total-price">Total: ${getTotal}</div>
        <button className="checkout" onClick={()=>cleanCart()} >Checkout</button>
                
        </>
    )
}