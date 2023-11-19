import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { createProject, deleteProjectById, getProjectDetailsById, getProjectsByAdminId, updateProjectById } from './ProjectApi'


const initialState={
    projects:[],
    errors:null,
    status:"idle",
    selectedProject:null
}

export const createProjectAsync=createAsyncThunk("projects/createProjectAsync",async(data)=>{
    const createdProject=await createProject(data)
    return createdProject
})
export const updateProjectByIdAsync=createAsyncThunk("projects/updateProjectByIdAsync",async(update)=>{
    const updatedProject=await updateProjectById(update)
    return updatedProject
})
export const getProjectDetailsByIdAsync=createAsyncThunk("projects/getProjectDetailsByIdAsync",async(id)=>{
    const selectedProjectDetails=await getProjectDetailsById(id)
    return selectedProjectDetails
})
export const getProjectsByAdminIdAsync=createAsyncThunk("projects/getProjectsByAdminIdAsync",async(id)=>{
    const adminProjects=await getProjectsByAdminId(id)
    return adminProjects
})
export const deleteProjectByIdAsync=createAsyncThunk("projects/deleteProjectByIdAsync",async(id)=>{
    const deletedProject=await deleteProjectById(id)
    return deletedProject
})

const projectSlice=createSlice({
    name:"projectSlice",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(createProjectAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(createProjectAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.projects.push(action.payload)
            })
            .addCase(createProjectAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })

            .addCase(updateProjectByIdAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(updateProjectByIdAsync.fulfilled,(state,action)=>{
                state.status='idle'
                const index=state.projects.findIndex((proj)=>proj._id===action.payload._id)
                state.projects[index]=action.payload
            })
            .addCase(updateProjectByIdAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })

            .addCase(getProjectDetailsByIdAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(getProjectDetailsByIdAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.selectedProject=action.payload
            })
            .addCase(getProjectDetailsByIdAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })

            .addCase(getProjectsByAdminIdAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(getProjectsByAdminIdAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.projects=action.payload
            })
            .addCase(getProjectsByAdminIdAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })

            .addCase(deleteProjectByIdAsync.pending,(state)=>{
                state.status='pending'
            })
            .addCase(deleteProjectByIdAsync.fulfilled,(state,action)=>{
                state.status='idle'
                state.projects=state.projects.filter((proj)=>proj._id!==action.payload._id)
            })
            .addCase(deleteProjectByIdAsync.rejected,(state,action)=>{
                state.status='idle'
                state.errors=action.error
            })
    }

})


export const selectProjects=(state)=>state.ProjectSlice.projects
export const selectProjectErrors=(state)=>state.ProjectSlice.errors
export const selectProjectStatus=(state)=>state.ProjectSlice.status
export const selectSelectedProject=(state)=>state.ProjectSlice.selectedProject

export default projectSlice.reducer