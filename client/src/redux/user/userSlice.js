import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart : (state) => {
            state.loading = true;
        },
        signInSuccess : (state, action) => {
            state.loading = false;
            state.error = false;
            state.currentUser = action.payload;
        },
        signInFail : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.loading = false,
            state.error = false,
            state.currentUser = action.payload
        },
        updateUserFailure: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserStart: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state, action) => {
            state.loading = false,
            state.error = false,
            state.currentUser = null
        },
        deleteUserFailure: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {signInStart, signInSuccess, signInFail, 
            updateUserStart, updateUserSuccess, updateUserFailure,
            deleteUserStart, deleteUserSuccess, deleteUserFailure} = userSlice.actions;

export default userSlice.reducer;