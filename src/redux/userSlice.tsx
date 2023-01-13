import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetch from 'node-fetch'

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
}
// export const signupUser = createAsyncThunk(
//     'users/signupUser',
//     async ({ name, email, passoword }, thunkAPI) => {
//         try {
//             const response = await fetch(
//                 'http://localhost:5000/api/v1/user/signup',
//                 {
//                     method: 'POST',
//                     headers: {
//                         Accept: 'application/json',
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         name,
//                         email,
//                         password
//                     }),
//                 }
//             );
//             let data = await response.json();
//             console.log('data', data);

//             if (response.status === 200) {
//                 localStorage.setItem('token', data.token);
//                 return { ...data, username: name, email: email };
//             } else {
//                 return thunkAPI.rejectWithValue(data);
//             }
//         } catch (e) {
//             console.log('Error', e.response.data);
//             return thunkAPI.rejectWithValue(e.response.data);
//         }
//     }
// );

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.loading = false;
            state.loading = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.loading = false;
        },

    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
