import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const addUser = createAsyncThunk('user/addUser',async(user) => {
    const response = await axios.post('http://127.0.0.1:8000/practices/',user)
    return response.data
})

export const fetchUsers = createAsyncThunk('users/fetchUser',async() => {
    const response = await axios.get('http://127.0.0.1:8000/practices/')
    return response.data
})
const userSlice = createSlice({
    name: 'user',
    initialState:{
        users:[],
        
        error:null,
        status:'idle'
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(fetchUsers.pending,(state) => {
                state.status='loading'
            })
            .addCase(fetchUsers.fulfilled,(state,action) => {
                state.status='success'
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected,(state,action)=>{
                state.status='failed'
                state.error=action.error.message
            })
            .addCase(addUser.pending,(state) => {

            })
            .addCase(addUser.fulfilled,(state,action) => {
                // state-> initial values
                // action -> result
                // action.payload -> data returned by the server
                state.users.push(action.payload)
            })
            .addCase(addUser.rejected,(state,error)=>{

            })
    }
})

export default userSlice.reducer