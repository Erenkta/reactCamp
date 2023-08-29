import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems:cartItems
}

export default function cardReducer(state=initialState,{type,payload}){ // 1-> state'e default değerini verdik , 2-> Action'dan dönen objeyi aldık 
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(cartItem => cartItem.product.id === payload.id) // sepetimizde önceden aynı ürünü ekledik mi diye kontrol ediyoruz
            if (product) {
                product.quantity++
                return { //bu şu an bir obje , bunu yaptık çünkü referans değerini değiştirmemiz lazım
                    ...state //Spread operator -> state'in içerisindeki elemanları buraya çıkarttı
                }
            } else {
                return{
                    ...state,
                    cartItems : [...state.cartItems,{quantity:1,product:payload}] 
                    //...state.cardItems diyerek cardItems içindeki elemanları buraya ayırdık ve payload'ımızı koyduk
                     // bu sayede yeni bir cartItems oluşturduk
                }
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cartItems : state.cartItems.filter(c => c.product.id !== payload.id) //silinmesini istediğin ürünü çıkardı listeden ve yeni bir array döndü

            }
        default:
            return state;
    }
}
