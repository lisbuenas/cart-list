import React, {useState} from 'react'
import { Item } from '../types';

export interface ProductListProps{
    items: Item[];
    addItem: (item: Item) => void
}

const ProductList:React.FC<ProductListProps> =({items,addItem}) =>{

    return <div>
        <h2>Product List</h2>
    {items.map(item => <div key={item.productId} className='cart-list'>
        <div>
            {item.name}
        </div>
        <div>
            {item.price}
        </div>
        <div>
            {item.stock}
        </div>
        <div className='add-btn' onClick={() => addItem(item)}> + Add</div>
    </div>)}


    
    </div>
}

export default ProductList;