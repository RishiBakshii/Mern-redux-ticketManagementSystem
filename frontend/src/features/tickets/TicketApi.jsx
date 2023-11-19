import { axiosi } from "../auth/AuthApi";

export const createTicket=async(data)=>{
    try {
        const res=await axiosi.post("/ticket",data)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const updateTicketById=async(update)=>{
    try {
        const res=await axiosi.patch(`/ticket/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const getTicketsByProjectId=async(id)=>{
    try {
        const res=await axiosi.get(`/ticket/project/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const deleteTicketById=async(id)=>{
    try {
        const res=await axiosi.delete(`/ticket/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}