import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name:'value',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decreament:(state)=>{
            if(state.value!==0){
                state.value-=1;
            }
        },
        reset:(state)=>{
            state.value=0;
        }
    }
})

export const {increment,decreament,reset}=counterSlice.actions;
export default counterSlice.reducer;