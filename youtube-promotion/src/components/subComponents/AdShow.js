import React from 'react'

const AdShow = () => {
    return (
        <div className='bg-[#D88B0F] flex flex-col items-center pt-16 pb-20'>
                <h1 className='relative max-sm:mx-10 text-center mb-10 font-medium text-3xl lg:text-5xl text-[#fff]'>
                    How your Ad will be shown
                    <img src={require('../../images/ad-arrow.png')} className='absolute max-md:hidden h-14 lg:h-20 scale-x-[-1] -right-24 lg:-right-32 top-1/2 ' alt='' />
                </h1>

            <div className='flex items-center max-md:flex-col gap-5 xl:gap-20'>
                <img className='max-md:h-40 h-56 lg:h-80  rounded-lg' src={require('../../images/youtube-ad1.png')} alt='' />
                <img className='max-md:h-44 h-48 lg:h-[270px] rounded-lg' src={require('../../images/youtube-ad2.png')} alt='' />
            </div>
        </div>
    )
}

export default AdShow