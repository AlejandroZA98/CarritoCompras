import { useState,useEffect,useMemo } from "react"
import { products } from "../data/db"

export const useCart=()=>{
    const initialCart= ()=>{
        const localStorageCart=localStorage.getItem('cart')
        return localStorageCart? JSON.parse(localStorageCart): []
      }

    const [cart,setCart]=useState(initialCart)
    const MAX_ITEMS =5
    const MIN_ITEMS=1
    const isEmpty=useMemo(()=>cart.length===0,[cart])
    const getTotal=useMemo(()=>cart.reduce((total,product)=> total+product.price*product.quantity,0).toFixed(2),[cart])
    const [data,setData]=useState([])

    useEffect(()=>{
        setData(products)
      },[])

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

    function addToCart(item){
        const itemExist= cart.findIndex((product)=> product.id==item.id)
        if (itemExist>=0){
            if (cart[itemExist].quantity>=MAX_ITEMS) return // si la cantidad de items es >=5 no retorna nada
            const updateCart=[...cart] //copia de cart
            updateCart[itemExist].quantity++ // aumenta cantidad
            setCart(updateCart)//   asigna el nuevo estado al cart
          }else{
            item.quantity=1
            setCart([...cart,item])
          }
    }

    function removeToCart(productid){
        setCart(cart=> cart.filter(product=>product.id!==productid))

    }
    function increseQuantity(id){
        const updatedCart=cart.map(item=> { // crea un nueo arreglo
            if(item.id===id && item.quantity<MAX_ITEMS){// si coincide el id y la cantidad del item es <5
             return{// devuelve todo el item y la cantidad la modifica
              ...item,
              quantity: item.quantity+1
             }
            }
            return item // si el id no coincide solo retorna el item 
          })
          setCart(updatedCart)// asigna el nuevo valor a cart
    }
    function decreseQuantity(id){
        const updatedCart=cart.map(item=> { // crea un nueo arreglo
            if(item.id===id && item.quantity>MIN_ITEMS){// si coincide el id y la cantidad del item es <5
             return{// devuelve todo el item y la cantidad la modifica
              ...item,
              quantity: item.quantity-1
             }
            }
            return item // si el id no coincide solo retorna el item 
          })
          setCart(updatedCart)// asigna el nuevo valor a cart
    }
  
    function cleanCart(){
        setCart([])
    }


    return{
        data,
        addToCart,
        cart,
        isEmpty,
        removeToCart,
        increseQuantity,
        decreseQuantity,
        getTotal,
        cleanCart
    }
}