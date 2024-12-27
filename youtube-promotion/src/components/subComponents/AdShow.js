import React from 'react'

const AdShow = () => {
    return (
        <div className='bg-[#D88B0F] flex flex-col items-center pt-16 pb-20'>
                <h1 className='relative mb-10 font-medium text-5xl text-[#fff]'>
                    How your Ad will be shown
                    <img src={require('../../images/ad-arrow.png')} className='absolute h-20 scale-x-[-1] -right-32 top-1/2 ' alt='' />
                </h1>

            <div className='flex items-center gap-28'>
                <img className='h-80 rounded-lg' src={require('../../images/youtube-ad1.png')} alt='' />
                <img className='h-[270px] rounded-lg' src={require('../../images/youtube-ad2.png')} alt='' />
            </div>
        </div>
    )
}

export default AdShow