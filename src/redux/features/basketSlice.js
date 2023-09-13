import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../Data";


const initialState ={
    products:storeData,
    amount:0,
    total:0,
}

const basketSlice=createSlice({
    name:'basket',
    initialState,
    reducers:{
        ordered:(state, {payload})=>{
            const item=state.products.find((glass) => glass.name ===payload)
            if(item){
                item.amount+=1
                state.amount+=1
                state.total+=item.price
            }
        },
        decreament:(state, {payload})=>{
            const item=state.products.find((glass) => glass.name ===payload)
            if(item && item.amount !==0){
                item.amount-=1
                state.amount-=1
                state.total-=item.price
    
            }
        },
        remove:(state, {payload})=>{
            const item=state.products.find((glass) => glass.id ===payload)
            state.total -=item.amount*item.price
            state.amount -=item.amount
            state.products = state.products.filter((item) => {
             if(item.id !==payload){
                return item
             }
             if(state.amount == 0){
                state.total=0
            }
             })
        },
    }
})

export const {ordered,decreament,remove} =basketSlice.actions
export default basketSlice.reducer