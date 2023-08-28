//Tüm state'leri topladığımız yer
import {combineReducers} from "redux"
import cartReducer from "./reducers/cartReducer.js"

const rootReducer = combineReducers( { 
    cart : cartReducer, //bunun gibi istediğimiz state'leri topladık ve ismini de değiştirdik
})

export default rootReducer //const'ları default olarak çıkarmak için böyle yazabiliriz