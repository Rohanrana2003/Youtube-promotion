import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../utils/FirebaseConfig'; // Import the Firebase auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // For navigation
import { checkValidData } from '../utils/ValidateForm';
import { errorIcon, googleIcon } from '../utils/constants';
import MyContext from '../context/MyContext';


const Auth = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login/Signup
  const [error, setError] = useState(null);
  const { setSelectedItem } = useContext(MyContext);
  const navigate = useNavigate(); // Use React Router's useNavigate for redirecting

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  // Handle signup or login based on the form type
  const handleAuth = async (e) => {

    e.preventDefault();
    let message = checkValidData(email, password)
    if (message) {
      setError(message);
      return;
    }
    try {
      if (isSignUp) {
        if (name.length <= 3) {
          setError('Please enter a valid name')
          return;
        }

        // Signup with Firebase Auth
        createUserWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
            const user = userCredential.user

            updateProfile(user, {
              displayName: name
            })
            // alert('Signup successful');
            onAuthSuccess(user); // Pass the user data back to parent
            navigate('/youtube-link'); // Navigate to YouTube link page
            setSelectedItem(1);
          })

          .catch(error => {
            console.log(error)
            setError('Email already registered')
          })

      }
      if (!isSignUp) {
        // Login with Firebase Auth
        signInWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
            // alert('Login successful');
            onAuthSuccess(userCredential.user); // Pass the user data back to parent
            navigate('/youtube-link'); // Navigate to YouTube link page
            setSelectedItem(1);
          })
          .catch(error => {
            setError('Invalid Credentials')
          })

      }
    } catch (error) {
      // alert('Error: ' + error.message);
      setError(error.message);
    }
  };

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // alert('Google Sign-In successful');
      onAuthSuccess(user); // Pass the user data back to parent
      navigate('/youtube-link'); // Navigate to YouTube link page
      setSelectedItem(1);
    } catch (error) {
      // alert('Error: ' + error.message);s
      // setError(error.message);
      console.log('Error: ' + error.message);
    }
  };

  //Handle Password reset
  const handleReset = () => {
    navigate('/password-reset')
  }


  const handleToggleLogin = () => {
    setError(null);
    setIsSignUp(!isSignUp);
  }

  return (
    <div className=" pt-24 flex justify-center min-h-[100vh] pb-20 z-50">

      {/* Black transparent Background  */}
      <div className='fixed top-0 h-screen object-cover w-[100%]  bg-black opacity-45 -z-10' ></div>


      {/* Background Image */}
      <div className='fixed top-0 h-[100vh] -z-20'>
        <img className='h-screen w-screen object-cover ' src={require('../images/auth-bg.webp')} alt='bg' />
      </div>
      <div className="flex justify-center items-center lg:mt-10">

        {/* <p className='lg:w-[600px] max-lg:mt-10 max-lg:px-5 max-lg:text-center  max-sm:text-3xl max-lg:text-4xl font-bold text-white text-6xl leading-[75px] lg:-ml-10'>
          Unlock the <br /> Full <span className='text-[#D88B0F]'>Potential</span> of <br /> Your <span className='text-[#FD2018]'>YouTube</span> Videos
        </p> */}

        <form onSubmit={handleAuth}
          className="bg-zinc-950  max-sm:w-[300px] bg-opacity-90  max-md:bg-opacity-80
          max-md:mx-0 py-6 px-10 max-sm:px-7 max-sm:py-5 rounded shadow-black shadow-md">

          <h1 className="text-[30px] max-sm:text-[25px] w-full -ml-2 text-center after:flex after:mx-auto after:w-[100%] after:-mr-[7px] after:bg-slate-700 after:h-p font-semibold mb-4 text-slate-100">{isSignUp ? 'Sign Up' : 'Log In'}</h1>
          {isSignUp
            &&
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block max-sm:text-sm focus:outline-none transition-all duration-300 focus:shadow-[#D88B0F] focus:shadow-custom  w-full p-[10px] pl-[14px] max-sm:py-3 mb-2 text-white rounded focus:bg-opacity-100 bg-opacity-70 bg-[#000] "
            />
          }
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block max-sm:text-sm focus:outline-none transition-all duration-300 focus:shadow-[#D88B0F] focus:shadow-custom   w-full p-[10px] pl-[14px] max-sm:py-3 mb-2 text-white rounded focus:bg-opacity-100 bg-opacity-70 bg-[#000] "
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block max-sm:text-sm p-[10px] w-full mb-1 pl-[14px] max-sm:py-3 transition-all duration-300 focus:outline-none focus:shadow-[#D88B0F] focus:shadow-custom text-white  rounded focus:bg-opacity-100 bg-opacity-70 bg-[#000] "
          />
          {
            error ?
              <div className=' flex items-center mb-3 mt-[2px] ml-1'>
                {errorIcon} <p className='text-red-600 ml-1 text-[13px]'>{error}</p>
              </div>
              :
              <p className='mb-3'></p>
          }
          <button type="submit" 
            className="bg-[#D88B0F] hover:opacity-85 max-sm:text-[15px]  text-white font-medium py-2 px-4 rounded w-full">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>

          <div>
            <p className='  w-full text-center my-3 font-medium text-lg text-white'>-<span className='text-[#D88B0F]'>OR</span>-</p>
          </div>
          {/* <button
            type="button"
            onClick={handleGoogleSignIn}
            className="hover:opacity-80 text-white my-2 mx-2 sm:mx-8 rounded w-fit"
          >
            <img src={require("../images/google.png")} className='bg-white rounded' width="195" alt="Google" />
          </button> */}
          <button type="button"
            onClick={handleGoogleSignIn}
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 me-2 mb-2
                      focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm w-full 
                      px-14 max-sm:px-8 max-sm:pl-12 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 ">
            {googleIcon}
            Sign in with Google
          </button>

          <div className='flex justify-between items-center mt-5'>

            <p onClick={handleReset}
              className='text-white text-center text-[14px] cursor-pointer hover:underline' >
              Forgot Password?
            </p>

            <div className=" max-sm:text-[15px] w-fit text-white  hover:opacity-90" >
              {isSignUp ?
                <p onClick={handleToggleLogin}
                  className='cursor-pointer text-[#D88B0F] font-semibold hover:underline '>
                  Login
                </p>
                :
                <p onClick={handleToggleLogin}
                  className='cursor-pointer font-semibold text-[#D88B0F] hover:underline '>
                  SignUp
                </p>
              }
            </div>

          </div>
        </form>
      </div>



    </div>
  );
};
export default Auth;