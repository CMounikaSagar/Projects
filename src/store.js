import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../src/components/others/counterSlice'
import UserReducer from './components/user/userSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: UserReducer
    }
})

export default store