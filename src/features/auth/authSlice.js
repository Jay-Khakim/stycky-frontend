import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice ({
    name: 'auth', 
    initialState: { token: null},
    reducers: {
        setCredentials: (state, action ) =>{
            const {accessToken} = action.playload
            state.token = accessToken
        },
        logOut: (state, action)=>{
            state.token = null 
        }
    }
})


export const {setCredentials, logOut} = authSlice.actions
export default authSlice.reducer
export const selectCurrnetToken = (state) => state.auth.token