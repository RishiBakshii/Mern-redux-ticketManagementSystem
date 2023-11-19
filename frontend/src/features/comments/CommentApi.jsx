import { axiosi } from "../auth/AuthApi";

export const createComment=async(data)=>{
    try {
        const res=await axiosi.post("/comment",data)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const updateCommentById=async(update)=>{
    try {
        const res=await axiosi.patch(`/comment/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const getCommentByTicketId=async(id)=>{
    try {
        const res=await axiosi.get(`/comment/ticket/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const deleteCommentById=async(id)=>{
    try {
        const res=await axiosi.delete(`/comment/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}