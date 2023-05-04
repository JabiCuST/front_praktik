import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from 'axios';

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {

const { data } = await instance.post('http://localhost:4444/auth/login', params);

    return data;
});

const initialState = {
    date: null,
    status: 'loading',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchAuth.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
        },
    },
});

export const authReducer = authSlice.reducer;