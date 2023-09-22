import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import CartComponent from './components/CartComponent';
import useGetCartManagement from './hooks/useGetCartManagement';

function App() {
  const {cartList , addItem, removeItem, total} = useGetCartManagement();

  const mockedItems = [
    { productId: "sku-1", price: 10, stock: 999, name: "Apple" },
    { productId: "sku-2", price: 20.20, stock: 4, name: "Dragonfruit" },
    { productId: "sku-3", price: 5, stock: 0, name: "Passionfruit" },
    { productId: "sku-4", price: 8.99, stock: 100, name: "Spinach" },
    { productId: "sku-5", price: 11.40, stock: 2, name: "Pumpkin" },
    { productId: "sku-6", price: 0.99, stock: 99, name: "Peas" }
    ]
  return (
    <div className="App">
      <div className='title-table'>
        <div>
        Name 
        </div>
        <div>
        Price 
        </div>
        <div>
        Stock
        </div>
        <div></div>
      </div>
      <ProductList items={mockedItems} addItem={addItem} />
      <CartComponent items={cartList} removeItem={removeItem} total={total}  />
    </div>
  );
}

export default App;
