import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import PasswordInput from '../components/PasswordInput'
import InputAdornment from '@mui/material/InputAdornment'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import googleLogo from '../assets/google-logo.png'

function Login() {
  const [password, setPassword] = useState<string>('')

  return (
    <div className='grid grid-cols-2'>
      <section className='bg-blue-300 relative h-screen max-ipad:hidden'>
        <div className='m-auto h-max max-w-xl p-5 absolute top-0 bottom-0 left-0 right-0 bg-red-200'>
          <h1 className='text-5xl text-white'>Digital platform for distance <span className='text-black'>learning.</span></h1>
        </div>
      </section>
      <section className='min-ipad:relative'>
        <form className='max-w-md m-auto h-max absolute top-0 bottom-0 left-0 right-0'>
          <h1 className='text-[28px] font-bold'>Welcome Back</h1>
          <p className='text-slate-400 text-base'>Please enter your credentials</p>
          <div className='mt-4'>
            <TextField
              type='email'
              size='small'
              margin='dense'
              label='Email'
              InputProps={{
                endAdornment: <InputAdornment position='end'><AlternateEmailOutlinedIcon /></InputAdornment>
              }}
              fullWidth
            />
            <PasswordInput
              label='Password'
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <div className='flex justify-end my-1'>
              <Link to='/forget-password' className='text-sm text-blue-400 cursor-pointer no-underline hover:underline'>Lupa password?</Link>
            </div>
          </div>
          <button type='submit' className='mt-2 bg-blue-400 w-full py-[6px] text-lg rounded-md text-white font-medium'>Login</button>
          <div className='border border-solid border-slate-400 mt-2 rounded-md px-3 py-[6px] flex justify-center items-center cursor-pointer hover:border-slate-700'>
            <img src={googleLogo} width={25} />
            <div className='text-black text-base ml-2 font-medium'>Sign In with Google</div>
          </div>
          <div className='mt-5 mb-3 text-center text-sm text-gray-400'>Don't have an account? <Link to='/signup' className='text-blue-400 no-underline hover:underline'>Sign Up</Link></div>
        </form>
      </section>
    </div>
  )
}

export default Login