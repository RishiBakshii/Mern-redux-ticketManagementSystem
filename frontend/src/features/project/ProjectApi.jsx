import { axiosi } from "../auth/AuthApi"

export const createProject=async(data)=>{
    try {
        const res=await axiosi.post("/project",data)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const updateProjectById=async(update)=>{
    try {
        const res=await axiosi.patch(`/project/${update._id}`,update)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const getProjectsByAdminId=async(id)=>{
    try {
        const res=await axiosi.get(`/project/admin/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const getProjectDetailsById=async(id)=>{
    try {
        const res=await axiosi.get(`/project/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const deleteProjectById=async(id)=>{
    try {
        const res=await axiosi.delete(`/project/${id}`)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}