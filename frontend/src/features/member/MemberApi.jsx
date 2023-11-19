import { axiosi } from "../auth/AuthApi";

export const createMember=async(data)=>{
    try {
        const res=await axiosi.post("/member",data)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const updateMemberById=async(update)=>{
    try {
        const res=await axiosi.patch(`/member/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const getMembersByAdminId=async(id)=>{
    try {
        const res=await axiosi.get(`/member/admin/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const deleteMemberById=async(id)=>{
    try {
        const res=await axiosi.delete(`/member/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}