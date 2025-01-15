import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import MyContext from '../../context/MyContext';

const GetStarted = ({ redirectToAuth }) => {

    const { setSelectedItem} = useContext(MyContext);
    const navigate = useNavigate();

    const redirectToFaq = () => {
        navigate('/faq');
        setSelectedItem(2);
    }

    const redirectToAbout = () =>{
        navigate('/about');
        setSelectedItem(3);
    }

    return (

        <div className='py-20 bg-[#dfdfdf] flex items-center flex-col'>

            <h1 className=' mb-7 text-[42px] max-sm:text-[36px] mx-5 text-zinc-800 font-semibold text-center'>Achieve your goals with
                <a href='https://www.younedia.com/' target='_blank' rel='noreferrer'>
                    <span className='relative text-[#D88B0F] z-10 font-bold hover:text-zinc-800 transition-all duration-150'> YOUNEDIA
                        <img className='absolute -right-2 -bottom-3' src={require('../../images/underline-black.png')} alt='' />
                    </span>
                </a>
            </h1>

            <p className='mb-9 text-[#696969] max-sm:text-[18px] text-[20px] mx-10 sm:mx-20 md:w-[55vw] text-center'>We drive campaigns through Google Ads, enabling you to attract more subscribers and boost engagement on your YouTube channel effectively.</p>

            <div className='flex max-sm:flex-col items-center'>
                <button onClick={()=>{redirectToAuth(); setSelectedItem(1)}}
                    className='mb-5 sm:mr-3 bg-[#D88B0F] transition-all ease-in duration-100 hover:scale-[.98] hover:bg-opacity-85 max-sm:text-lg text-xl font-medium text-[#ffffff]  max-sm:py-[10px] max-sm:px-[25px] py-[13px] px-[30px] rounded-[5px] '>
                    Start Promotion
                </button>
                <button onClick={redirectToAbout}
                    className='mb-5 sm:ml-3 bg-zinc-800 transition-all ease-in duration-100 hover:scale-[.98] hover:bg-opacity-85 max-sm:text-lg text-xl font-medium text-[#ffffff] max-sm:py-[10px] max-sm:px-[40px] py-[13px] px-[51px] rounded-[5px] '>
                    About us
                </button>
            </div>

            <p className='text-zinc-600 text-sm sm:text-base cursor-pointer underline hover:text-black'
                onClick={redirectToFaq}
            >Facing any issues?</p>

        </div>
    )
}

export default GetStarted