import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from '../features/auth/AuthSlice'
import ProjectSlice from '../features/project/ProjectSlice'

export const store=configureStore({
    reducer:{
        AuthSlice,
        ProjectSlice,
    }
})