export default function Product({product,addToCart}){
    return(
        <>
        <hr/>
        <div className="product">
          <h2>{product.name}</h2>
          <small>Category:{product.category} </small>
          <h3>Price ${product.price}</h3>
          <h3>Stock: {product.stock}</h3>
          <div>
            <span>
                {product.description}
            </span>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
        </>
   
    )
}