import { createSlice } from "@reduxjs/toolkit";

let user_initial_value = { first_name: "", last_name: "", email: "" };

export const userSlice = createSlice({
    name: "user",
    initialState: { value: user_initial_value },
    reducers: {
        addUser: (state, action) => {
            return [...state, action.payload]
        },

        updateUser: (state, action) => {
            return state.map((user) => user.id === action.payload.id ? action.payload : state)
        },

        deleteUser: (state, action) => {
            return state.filter((user) => user.id !== action.payload)
        },

        moveUser: (state, action) => {
            return state.map((user) => user.id === action.payload.id ? action.payload : state)
        },
    }
});

export const { addUser, updateUser, deleteUser, moveUser } = userSlice.actions;

export default userSlice.reducer;