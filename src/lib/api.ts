import { userSchema, type User } from "./schemas";
import axios from 'axios';

export const fetchUser = async (): Promise<User[]> => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return userSchema.parse(response.data);
}