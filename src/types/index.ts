
export interface Item{
    productId: string;
    price: number;
    stock: number;
    name: string;
}

export interface CartItem{
    productId: string;
    price: number;
    quantity: number;
    name: string;
}

export interface ProductList{
    items: Item[];
}
