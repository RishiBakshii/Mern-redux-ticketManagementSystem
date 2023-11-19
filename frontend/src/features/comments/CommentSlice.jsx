import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { createComment, deleteCommentById, getCommentByTicketId, updateCommentById } from './CommentApi'


const initialState={
    comments:[],
    errors:null,
    status:"idle",
}

export const createCommentAsync=createAsyncThunk('comment/createCommentAsync',async(data)=>{
    const createdComment=await createComment(data)
    return createdComment
})
export const updateCommentByIdAsync=createAsyncThunk('comment/updateCommentByIdAsync',async(update)=>{
    const updatedComment=await updateCommentById(update)
    return updatedComment
})
export const getCommentByTicketIdAsync=createAsyncThunk("comment/getCommentByTicketIdAsync",async(id)=>{
    const comments=await getCommentByTicketId(id)
    return comments
})
export const deleteCommentByIdAsync=createAsyncThunk("comment/deleteCommentByIdAsync",async(id)=>{
    const deletedComment=await deleteCommentById(id)
    return deletedComment
})

const commentSlice=createSlice({
    name:"commentSlice",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(createCommentAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(createCommentAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.comments.push(action.payload)
            })
            .addCase(createCommentAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })

            .addCase(updateCommentByIdAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(updateCommentByIdAsync.fulfilled,(state,action)=>{
                state.status='idle'
                const index=state.comments.findIndex((comment)=>comment._id===action.payload._id)
                state.comments[index]=action.payload
            })
            .addCase(updateCommentByIdAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })

            .addCase(getCommentByTicketIdAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(getCommentByTicketIdAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.comments=action.payload
            })
            .addCase(getCommentByTicketIdAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })

            .addCase(deleteCommentByIdAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(deleteCommentByIdAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.comments=state.comments.filter((comment)=>comment._id!==action.payload._id)
            })
            .addCase(deleteCommentByIdAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })
    }
})


export const selectComments=(state)=>state.CommentSlice.comments
export const selectCommentErrors=(state)=>state.CommentSlice.errors
export const selectCommentStatus=(state)=>state.CommentSlice.status

export default commentSlice.reducer