import React, { useEffect } from 'react'
import {Alert, Box, Button, Paper, Stack, TextField, Typography} from '@mui/material'
import Lottie from 'lottie-react';
import { useForm } from "react-hook-form"
import { singlemanWorking } from '../../../assets';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync, selectErrors, selectLoggedInUser, signupAsync } from '../AuthSlice';

export const Signup = () => {
    const dispatch=useDispatch()
    const loggedInUser=useSelector(selectLoggedInUser)
    const error=useSelector(selectErrors)
    const navigate=useNavigate()
    const {register,handleSubmit,watch,formState: { errors },} = useForm()

    useEffect(()=>{
        if(loggedInUser){
            navigate("/")
        }
    },[loggedInUser])
  return (
    <>
    <Stack flexDirection={'row'} p={2} width={'100vw'} height={'100vh'}>

        {/* left box for animation */}
        <Stack flex={3}>
            <Box width={'75%'}>
                <Lottie animationData={singlemanWorking}></Lottie>
            </Box>
        </Stack>

        {/* right box for form */}
        <Stack flex={2} component={Paper} elevation={2} p={2} justifyContent={'center'}>
            <Stack rowGap={2} component={'form'} onSubmit={handleSubmit((data)=>{
                dispatch(signupAsync(data))
            })}>

                {/* heading and brandline */}
                <Stack spacing={.5} alignItems={'center'}>
                    <Typography variant='h2' color={'primary'}>StangTickets</Typography>
                    <Typography variant='h6' fontWeight={100}>Ticketing made easy</Typography>
                </Stack>

                {/* text feilds */}
                <Stack spacing={2}>
                        <TextField {...register("name",{required:"Username is required"})} label="Username" variant="standard" />
                        <TextField {...register("email",{required:"Email is required"})} label="Email" variant="standard" />
                        <TextField {...register("password",{required:"Password is required"})} type='password' label='Password' variant="standard"/>
                </Stack>
                <Stack sx={{marginTop:'1rem'}}>
                    <Button type='submit' fullWidth variant='contained'>Signup</Button>
                </Stack>
                <Typography component={Link} sx={{textDecoration:"none"}} alignSelf={'flex-end'} to={'/login'}>Already a member? login</Typography>
                {error && <Alert severity='error'>{error}</Alert>}
            </Stack>
        </Stack>
    </Stack>
    
    </>
  )
}
