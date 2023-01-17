import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loading: false,
    error: false,
}

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    const response = await fetch(
        `http://localhost:5000/api/v1/user/getuser`
    );
    const users = await response.json();

    return users;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        // GET USER
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.user = [];
        })
    }
});

export const { fetchStart, fetchFailure, fetchSuccess } = userSlice.actions;
export default userSlice.reducer;