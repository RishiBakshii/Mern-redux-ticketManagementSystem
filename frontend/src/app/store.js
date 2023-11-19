import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from '../features/auth/AuthSlice'
import ProjectSlice from '../features/project/ProjectSlice'
import MemberSlice from '../features/member/MemberSlice'

export const store=configureStore({
    reducer:{
        AuthSlice,
        ProjectSlice,
        MemberSlice,
    }
})