import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        fetchFailure: (state) => {
            state.loading = false;
            state.loading = true;
        },
    },
});

export const { fetchStart, fetchFailure, fetchSuccess } = userSlice.actions;
export default userSlice.reducer;