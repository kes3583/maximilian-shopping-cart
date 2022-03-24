import {createSlice, current} from '@reduxjs/toolkit';
//import {nanoid} from 'nanoid';

export const DUMMY_PRODUCTS =[
    {
        id: 0,
        title: 'book',
        price: 6,
        countInStock: 2,
        description: 'my first book'
    },
    {
        id: 1,
        title: 'hat',
        price: 15,
        countInStock: 10,
        description: 'my first hat'
    },
    {
        id: 2,
        title: 'bag',
        price: 65,
        countInStock: 10,
        description: 'my first bag'
    }
];

// {
//     id: 2,
//     title: 'bag',
//     price: 65,
//     quantity: 2,
//     countInStock: 10,
// }
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0, // 총 갯수는 어디서 계산할 것인가는 고민 필요, 일단 컴포넌트에서 계산
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => newItem.id === item.id);

            console.log('state', current(state))
            const countInStock = newItem.countInStock ? newItem.countInStock : existingItem.countInStock

            if(!existingItem) {
                state.items.push({...newItem, quantity:1, outOfStock: false });
            }else{
                console.log('countInStock', countInStock)
                const existingItem2 = state.items.find((item) => newItem.id === item.id);
                console.log('existingItem2', existingItem2.quantity)
                console.log('existingItem.quantity', existingItem.quantity)
                if(countInStock === existingItem.quantity) {
                    existingItem.outOfStock = true;
                }else{
                    existingItem.quantity++;
                }
                //existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
            state.totalQuantity++; // 장바구니 제품 총 갯수
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => id === item.id);
            //console.log('existingItem', existingItem)
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                existingItem.quantity--;
                //existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
            state.totalQuantity++; // 장바구니 제품 총 갯수
        }
    }
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice;