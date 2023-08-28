//Sepetle ilgili action'ların tutulduğu yer

//Yazım hatalarını engellemek için
export const ADD_TO_CART = "ADD_TO_CART" 
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"



export function addToCart(product){
    return{ //Redux diyor ki bana bir obje yolla bunun içinde aksiyon ismi olsun ki ben o isim ile o aksiyonun hangi state'leri etkilediğini bulayım
        type : ADD_TO_CART, //aksiyon ismi
        payload : product // bu da veri
    }
}

export function removeFromCart(product){
    return{
        type : REMOVE_FROM_CART,
        payload : product
    }
}