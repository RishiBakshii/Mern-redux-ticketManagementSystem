import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { checkAuth, loginAdmin, loginMember, logout, signupAdmin } from './AuthApi'


const initialState={
    loggedInUser:null,
    errors:null,
    status:"idle",
    isAuthChecked:false
}

export const loginAsync=createAsyncThunk("auth/loginAsync",async(cred)=>{
    const loggedInUser=await loginAdmin(cred)
    return loggedInUser
})
export const loginMemberAsync=createAsyncThunk("auth/loginMemberAsync",async(cred)=>{
    const loggedInUser=await loginMember(cred)
    return loggedInUser
})
export const signupAsync=createAsyncThunk("auth/signupAsync",async(cred)=>{
    const loggedInUser=await signupAdmin(cred)
    return loggedInUser
})
export const checkAuthAsync=createAsyncThunk("auth/checkAuthAsync",async()=>{
    const response=await checkAuth()
    return response
})
export const logoutAsync=createAsyncThunk("auth/logoutAsync",async()=>{
    const res=await logout()
    return res
})

const authSlice=createSlice({
    name:"authSlice",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(loginAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(loginAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.loggedInUser=action.payload
            })
            .addCase(loginAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error.message
            })

            .addCase(loginMemberAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(loginMemberAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.loggedInUser=action.payload
            })
            .addCase(loginMemberAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error.message
            })

            .addCase(signupAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(signupAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.loggedInUser=action.payload
            })
            .addCase(signupAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error.message
            })

            .addCase(checkAuthAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(checkAuthAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.loggedInUser=action.payload
                state.isAuthChecked=true
            })
            .addCase(checkAuthAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error.message
                state.isAuthChecked=true
            })

            .addCase(logoutAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(logoutAsync.fulfilled,(state)=>{
                state.status='idle'
                state.loggedInUser=null
            })
            .addCase(logoutAsync.rejected,(state)=>{
                state.status='idle'
                state.loggedInUser=null
            })
    }

})

export const selectLoggedInUser=(state)=>state.AuthSlice.loggedInUser
export const selectErrors=(state)=>state.AuthSlice.errors
export const selectStatus=(state)=>state.AuthSlice.status
export const selectIsAuthChecked=(state)=>state.AuthSlice.isAuthChecked
export default authSlice.reducer