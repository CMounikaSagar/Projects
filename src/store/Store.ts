

export type User = {
    id: number;
    name: string;
    email: string;
}


export type UserState = {
    users : User[];
}


export type UserAction = {
    fetchUsers: () => void;
}


export type UserStore = UserState & UserAction;
