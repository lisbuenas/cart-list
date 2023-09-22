import { CartItem, Item } from '../types';

interface CartComponentProps{
    items: CartItem[];
    removeItem:(item: CartItem) => void;
    total: number
}

const CartComponent: React.FC<CartComponentProps> =({items,removeItem, total}) =>{
    return <>
    <h2>Shopping cart</h2>
    {items.map(item => <div key={item.productId} className='cart-list'>
        <div>
            {item.name}
        </div>
        <div>
            {item.price}
        </div>
        <div>
            {item.quantity}
        </div>
        <div className='remove-btn' onClick={() => removeItem(item)}> 
         - Remove
        </div>
    </div>)}

    <div>Total price USD: {total.toFixed(3)}</div>

    <div>Confirm order</div>
    </>
}

export default CartComponent;