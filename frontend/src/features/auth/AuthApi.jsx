import axios from 'axios'

export const axiosi=axios.create({withCredentials:true,baseURL:"http://localhost:8000"})

export const signupAdmin=async(cred)=>{
    try {
        const res=await axiosi.post("/auth/signup",cred)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const loginAdmin=async(cred)=>{
    try {
        const res=await axiosi.post("/auth/login",cred)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const loginMember=async(cred)=>{
    try {
        const res=await axiosi.post("/auth/login-member",cred)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const checkAuth=async()=>{
    try {
        const res=await axiosi.get("/auth/check-auth")
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const logout=async()=>{
    try {
        const res=await axiosi.get("/auth/logout")
        return res.data
    } catch (error) {
        throw error.response.data
    }
}