import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth",
    initialState: { value: { name: '', username: '', phone: '', email: '', picture: '', access_token: '', isLoggedIn: false} },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = {  name: '', username: '', phone: '', email: '', picture: '', access_token: '', isLoggedIn: false}
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;