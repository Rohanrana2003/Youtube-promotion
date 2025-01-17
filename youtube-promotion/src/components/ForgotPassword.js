import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../utils/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { errorIcon, leftArrow, mailIcon } from '../utils/constants';

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email).then(data => {
            setError('')
            setSuccess('Email sent Successfully!')
            // alert('Check your email')
        }).catch(err => {
            setSuccess('')
            setError('Please enter a valid mail')
            // alert(err)
        })
    }

    //Revert back to login page 
    const backToLogin = () => {
        navigate('/auth');
    }

    return (
        <div className=' flex items-center justify-center w-full'>

         {/* Black transparent Background  */}
         <div className='fixed top-0 h-full object-cover w-screen  bg-black opacity-20 -z-10' ></div>

            {/* Background Image */}
                <img className='fixed -z-20 h-[100vh] top-0 w-screen object-cover' src={require('../images/forgot.webp')} alt='bg' />

            <div className='lg:-ml-20  pt-28 p-6 rounded-3xl flex lg:gap-32 max-lg:flex-col items-center justify-center'>

                <img className='w-[250px] lg:w-[480px] md:w-[400px] max-lg:mx-auto max-lg:flex' src={require('../images/forgotPassword.webp')} alt='forgotPassword' />

                <div className='text-center h-[370px]'>
                    <h1 className='font-bold text-5xl max-lg:text-4xl max-sm:text-[28px] mt-10 mb-2 text-white'>Forgot <span className='text-[#D88B0F]'>Password</span> </h1>

                    <p className='text-gray-300 text-md max-md:text-[15px] max-md:px-3 mb-6 text-center max-w-[350px] '>Enter your email and we'll send you a link to reset your password.</p>

                    <form onSubmit={handleSubmit} >

                        <div className='relative '>
                            <span className='text-white absolute top-[16px] left-3 w-10'>{mailIcon}</span>

                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block pl-10 border border-gray-600 w-full p-[10px] mb-2 text-white rounded opacity-70 bg-[#1A1F27] focus:bg-opacity-85 bg-opacity-40 focus:outline-none focus:shadow-[#D88B0F] focus:shadow-custom"
                            />
                        </div>
                        {
                            success &&
                            <div className=' flex items-center mb-3 ml-1'>
                                <p className='text-green-400 ml-1 text-[13px]'>{success}</p></div>
                        }
                        {
                            error ?
                                <div className=' flex items-center mb-3 ml-1'>
                                    {errorIcon}
                                    <p className='text-red-600 ml-1 text-[13px]'>{error}</p></div>
                                :
                                <p className='mb-3'></p>
                        }

                        <button type='submit' 
                            className='py-2 px-4 rounded  w-full bg-gradient-to-b  from-[#2366e1] to-[#203f78] hover:opacity-85  text-white font-semibold'>Submit</button>
                    </form>

                    <div className='w-full flex justify-center'>
                        <p className='cursor-pointer w-fit  flex items-center gap-[5px] hover:scale-95 text-[#D88B0F] text-sm mt-6' onClick={backToLogin}><span className='mt-[2px]'>{leftArrow}</span> Back to Login</p>

                    </div>
                </div>

            </div>



        </div>
    )
}

export default ForgotPassword