import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { createTicket, deleteTicketById, getTicketsByProjectId, updateTicketById } from './TicketApi'


const initialState={
    tickets:[],
    selectedTicket:null,
    errors:null,
    status:"idle",
}

export const createTicketAsync=createAsyncThunk('ticket/createTicketAsync',async(data)=>{
    const createdTicket=await createTicket(data)
    return createdTicket
})
export const updateTicketByIdAsync=createAsyncThunk('ticket/updateTicketByIdAsync',async(update)=>{
    const updatedTicket=await updateTicketById(update)
    return updatedTicket
})
export const getTicketsByProjectIdAsync=createAsyncThunk("ticket/getTicketsByProjectIdAsync",async(id)=>{
    const tickets=await getTicketsByProjectId(id)
    return tickets
})
export const deleteTicketByIdAsync=createAsyncThunk("ticket/deleteTicketByIdAsync",async(id)=>{
    const deletedTicket=await deleteTicketById(id)
    return deletedTicket
})

const ticketSlice=createSlice({
    name:"ticketSlice",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(createTicketAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(createTicketAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.tickets.push(action.payload)
            })
            .addCase(createTicketAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })

            .addCase(updateTicketByIdAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(updateTicketByIdAsync.fulfilled,(state,action)=>{
                state.status='idle'
                const index=state.tickets.findIndex((ticket)=>ticket._id===action.payload._id)
                state.tickets[index]=action.payload
            })
            .addCase(updateTicketByIdAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })

            .addCase(getTicketsByProjectIdAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(getTicketsByProjectIdAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.tickets=action.payload
            })
            .addCase(getTicketsByProjectIdAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })

            .addCase(deleteTicketByIdAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(deleteTicketByIdAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.tickets=state.tickets.filter((ticket)=>ticket._id!==action.payload._id)
            })
            .addCase(deleteTicketByIdAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })
    }
})


export const selectTickets=(state)=>state.TicketSlice.tickets
export const selectTicketErrors=(state)=>state.TicketSlice.errors
export const selectTicketStatus=(state)=>state.TicketSlice.status
export const selectSelectedTicket=(state)=>state.TicketSlice.selectedTicket

export default ticketSlice.reducer