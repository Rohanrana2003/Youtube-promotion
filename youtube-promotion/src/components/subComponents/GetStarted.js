import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import MyContext from '../../context/MyContext';

const GetStarted = ({ redirectToAuth }) => {

    const [, setSelectedItem] = useContext(MyContext);
    const navigate = useNavigate();

    const redirectToFaq = () => {
        navigate('/faq');
        setSelectedItem(1);
    }

    const redirectToAbout = () =>{
        navigate('/about');
        setSelectedItem(2);
    }

    return (

        <div className='py-20 bg-[#dfdfdf] flex items-center flex-col'>

            <h1 className=' mb-7 text-[42px] text-zinc-800 font-semibold'>Achieve your goals with
                <a href='https://www.younedia.com/' target='_blank' rel='noreferrer'>
                    <span className='relative text-[#D88B0F] z-10 font-bold hover:text-zinc-800'> YOUNEDIA
                        <img className='absolute -right-2 -bottom-3' src={require('../../images/underline-black.png')} alt='' />
                    </span>
                </a>
            </h1>

            <p className='mb-9 text-[#696969] text-[20px] w-[55vw] text-center'>We promote campaigns through Google Adwords, which helps you to get more
                subscribers & engagement on your channel.</p>

            <div>
                <button onClick={redirectToAuth}
                    className='mb-5 mr-3 bg-[#D88B0F] transition-all ease-in duration-100 hover:scale-[.98] hover:bg-opacity-85 text-xl font-medium text-[#ffffff] py-[13px] px-[30px] rounded-[5px] '>
                    Start Promotion
                </button>
                <button onClick={redirectToAbout}
                    className='mb-5 ml-3 bg-zinc-800 transition-all ease-in duration-100 hover:scale-[.98] hover:bg-opacity-85 text-xl font-medium text-[#ffffff] py-[13px] px-[51px] rounded-[5px] '>
                    About us
                </button>
            </div>

            <p className='text-zinc-600 cursor-pointer underline hover:text-black'
                onClick={redirectToFaq}
            >Facing any issues?</p>

        </div>
    )
}

export default GetStarted