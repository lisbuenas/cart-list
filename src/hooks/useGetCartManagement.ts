import { CartItem, Item } from "../types";
import {useState} from 'react'

const useGetCartManagement = () =>{
    const [cartList,setCartList] = useState<CartItem[]>([]);
    const total = cartList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
      }, 0);

    const removeItem = (item:CartItem) =>{
        const res= cartList.filter((itemInternal:CartItem) => itemInternal.productId !== item.productId);

        setCartList([...res]);
    }

    const addItem = (item: Item) =>{
        const itemIndex = cartList.findIndex((cartItem) => cartItem.productId === item.productId);

        if (itemIndex !== -1) {
          const updatedCart:CartItem[] = [...cartList];
          updatedCart[itemIndex].quantity += 1;
          setCartList(updatedCart);
        } else {
          setCartList([...cartList, { ...item, quantity: 1 }]);
        }
    }

    return {removeItem, addItem, cartList,total}
}

export default useGetCartManagement;