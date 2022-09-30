import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:10
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        incrementByAmount: (state,action)=>{
            state.count+=action.payload
        }
    }
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;