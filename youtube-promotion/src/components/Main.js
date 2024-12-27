import React, { useEffect } from 'react'
import Works from './subComponents/Works'
import GetStarted from './subComponents/GetStarted';
import AdShow from './subComponents/AdShow';
import WhyChoose from './subComponents/WhyChoose';
import Summarize from './subComponents/Summarize';

const Main = ({ redirectToAuth }) => {
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, []) 

    return (
        <div className=" pt-28 z-50">

            <section className='h-[90vh] flex flex-col items-center'>

                {/* Black transparent Background  */}
                <div className='fixed top-0 h-screen object-cover w-[100%]  bg-black opacity-55 -z-10' ></div>

                {/* Background Image  */}
                <div className="top-0 fixed h-[100vh]  -z-20">
                    <img className='h-screen w-screen after:absolute after:content-[""] after:w-[100vw] after:h-[100vh] after:bg-black object-cover' src={require('../images/background.jpg')} alt='bg' />
                </div>

                <div className="flex items-center justify-center flex-col">

                    <div className='flex flex-col items-center py-5 mb-7 '>
                        <h1 className="text-5xl font-normal px-4 my-4 mb-7 text-white text-center">Welcome to <a href='https://www.younedia.com/' target='_blank' rel='noreferrer'>
                            <span className='relative text-[#D88B0F] z-10  hover:text-white'>YOUNEDIA
                                <img className='absolute right-2' src={require('../images/underline-black.png')} alt='' />
                            </span></a>
                        </h1>
                        <p className=" text-center leading-[60px] font-medium text-5xl mb-5 text-neutral-300">PROMOTE YOUR <span className='text-[#fff]'>YOUTUBE</span> VIDEO TO <br /> MILLIONS!</p>
                        <p className="text-lg font-light w-full text-center px-10 text-white">Make your <span className='text-[#d88b0f]'>Views</span> and
                            <span className='text-[#d88b0f]'> Likes</span>  skyrocket with our Professional Promotion strategies.</p>
                    </div>

                    <button onClick={redirectToAuth}
                        className=' flex group items-center gap-3 pr-10 bg-[#c47e0e] hover:bg-opacity-85 text-2xl font-medium text-[#f3f3f3] py-[13px] px-[30px] rounded-[5px] shadow-md shadow-black hover:shadow-none '>Start Promotion 
                        <img className='w-[33px] group-hover:translate-x-5 transition duration-500' src={require('../images/rightArrow.png')} alt='' /></button>

                </div>

                {/* <p className="bold-100 my-6 text-gray-300 text-center px-4 text-sm"><span className=' underline '>Here’s how it works:</span> Sign up, paste your YouTube link, set your budget, and we’ll handle the rest. Your video will be promoted to your target audience, helping you gain more visibility and engagement.</p> */}

            </section>

            <section>
                <Works />
            </section>

            <section>
                <AdShow />
            </section>

            <section>
                <WhyChoose />
            </section>

            <section>
                <GetStarted redirectToAuth={redirectToAuth} />
            </section>

            <section>
                <Summarize />
            </section>

        </div>




    )
}

export default Main