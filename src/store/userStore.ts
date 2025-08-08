import {create} from 'zustand';
import axios from 'axios';

import { type UserStore, type UserState, type User } from './Store';


const initalState: UserState = {
    users: []
    
}


export const useUserStore = create<UserStore>((set) => ({
	...initalState,

    fetchUsers: async() => {
       
        try{
            const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
            console.log(response.data);
            set({users:response.data})
        }
        catch(error) {
            let errorMessage = 'An error occurred while fetching users.';
            if (axios.isAxiosError(error) && error.response) {
                errorMessage = `Error: ${error.response.status} - ${error.response.statusText}`;
            }
            set({error: errorMessage, loading:false})
        }
    }
}))
