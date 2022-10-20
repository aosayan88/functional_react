import { createSlice } from "@reduxjs/toolkit";

let users_initial_data = [
    { id: 1, designated_table: 0, first_name: "Alfie", last_name: "Osayan", email: "aosayan@village88.com"},
    { id: 2, designated_table: 0, first_name: "Ruel", last_name: "Ytac", email: "ruel.ytac@village88.com"},
    { id: 3, designated_table: 0, first_name: "Michael", last_name: "Choi", email: "mchoi@village88.com" },
    { id: 4, designated_table: 1, first_name: "Test1", last_name: "Test1", email: "aosayan@village88.com"},
    { id: 5, designated_table: 1, first_name: "Test2", last_name: "Test2", email: "ruel.ytac@village88.com"},
    { id: 6, designated_table: 1, first_name: "Test3", last_name: "Test3", email: "mchoi@village88.com"}
]

export const userSlice = createSlice({
    name: "user",
    initialState: { 
        users_data: users_initial_data,
        user_data: 0
    },
    reducers: {
        addUser: (state, action) => {
            state.users_data = [...state.users_data, action.payload]
        },
        updateUser: (state, action) => {
            /* Will loop to check if the user data is in the table data */
            state.users_data = state.users_data.map(user_data => {
                /*  will update if user data id matches in the row data id */
                if (user_data.id === action.payload.id) {
                    return { ...action.payload };
                }
                return user_data;
            });
        },
        deleteUser: (state, action) => {
            state.users_data = state.users_data.filter(user_data => user_data.id !== action.payload)
        },
        moveUser: (state, action) => {
            state.users_data = state.users_data.map(user_data => {
                /*  will update if user data id matches in the row data id */
                if (user_data.id === action.payload) {
                    return { ...user_data, designated_table: 1 - user_data.designated_table };
                }

                return user_data;
            });
        },
        showUser: (state, action) => {
            state.user_data = action.payload
        }
    }
});

export const { deleteUser, addUser, updateUser, moveUser, showUser } = userSlice.actions;

export default userSlice.reducer;