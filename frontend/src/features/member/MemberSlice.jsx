import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { createMember, deleteMemberById, getMembersByAdminId, updateMemberById } from './MemberApi'


const initialState={
    members:[],
    selectedMember:null,
    errors:null,
    status:"idle",
}

export const createMemberAsync=createAsyncThunk('member/createMemberAsync',async(data)=>{
    const createdMember=await createMember(data)
    return createdMember
})
export const updateMemberByIdAsync=createAsyncThunk('member/updateMemberByIdAsync',async(update)=>{
    const updatedMember=await updateMemberById(update)
    return updatedMember
})
export const getMembersByAdminIdAsync=createAsyncThunk("member/getMembersByAdminId",async(id)=>{
    const members=await getMembersByAdminId(id)
    return members
})
export const deleteMemberByIdAsync=createAsyncThunk("member/deleteMemberByIdAsync",async(id)=>{
    const deletedMember=await deleteMemberById(id)
    return deletedMember
})

const memberSlice=createSlice({
    name:"memberSlice",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(createMemberAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(createMemberAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.members.push(action.payload)
            })
            .addCase(createMemberAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })

            .addCase(updateMemberByIdAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(updateMemberByIdAsync.fulfilled,(state,action)=>{
                state.status='idle'
                const index=state.members.findIndex((member)=>member._id===action.payload._id)
                state.members[index]=action.payload
            })
            .addCase(updateMemberByIdAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })

            .addCase(getMembersByAdminIdAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(getMembersByAdminIdAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.members=action.payload
            })
            .addCase(getMembersByAdminIdAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })

            .addCase(deleteMemberByIdAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(deleteMemberByIdAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.members=state.members.filter((member)=>member._id!==action.payload._id)
            })
            .addCase(deleteMemberByIdAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })
    }
})


export const selectMembers=(state)=>state.MemberSlice.members
export const selectMemberErrors=(state)=>state.MemberSlice.errors
export const selectMemberStatus=(state)=>state.MemberSlice.status
export const selectSelectedMember=(state)=>state.MemberSlice.selectedMember

export default memberSlice.reducer