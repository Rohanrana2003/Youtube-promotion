import React from 'react'

const Works = () => {
  return (
    <div className='w-full h-full bg-[#fff] flex flex-col items-center py-8'>

      <h1 className='my-10 font-semibold text-[38px] text-zinc-800 text-center max-sm:text-[32px] max-sm:w-[300px]'>How YouTube Promotion works?</h1>

      <div className='flex flex-col items-center '>

        <section className=' flex max-md:flex-col-reverse items-center justify-center max-md:gap-0 max-md:mb-10 mb-10 gap-56'>

          <div className='max-md:w-[80vw] w-[400px]'>
            <h1 className='max-sm:text-4xl text-6xl  mb25 font-bold text-[#696969]'>01</h1>

            <h3 className='mb-2 font-medium max-md:text-[19px] text-[21px]'>Setup</h3>

            <p className='text-[#565656] max-md:text-[16px] text-[18px] '>Add your YouTube channel, choose your weekly budget and targeting information (countries, gender, age, interests)</p>
          </div>
          <img className='max-md:w-52 w-64' src={require('../../images/setup.png')} alt=''/>

        </section>

        <section className='flex max-md:flex-col items-center justify-center max-md:gap-0 max-md:mb-10 mb-10 gap-56'>
          <img className='max-md:w-52 w-64' src={require('../../images/payment.png')} alt=''/>

          <div className='max-md:w-[80vw] w-[400px] '>
            <h1 className='max-sm:text-4xl text-6xl mb-2 font-bold text-[#696969]'>02</h1>

            <h3 className='mb-2 font-medium max-md:text-[19px] text-[21px]'>Payment</h3>

            <p className='text-[#565656] max-md:text-[16px] text-[18px]'>Choose your payment method: credit card or manual balance refill. You can pay with all major credit cards or PayPal   </p>
          </div>

        </section>

        <section className='flex max-md:flex-col-reverse items-center justify-center max-md:gap-0 max-md:mb-10 mb-10 gap-56'>

          <div className='max-md:w-[80vw] w-[400px] '>
            <h1 className='max-sm:text-4xl text-6xl mb-2 font-bold text-[#696969]'>03</h1>

            <h3 className='mb-2 font-medium max-md:text-[19px] text-[21px]'>Promotion</h3>

            <p className='text-[#565656] max-md:text-[16px] text-[18px]'>The channel promotion starts on YouTube. Your videos will be shown to your chosen audience and subscribers of similar channels. You can follow the promotion progress in your Prodvigate dashboard</p>
          </div>

          <img className='max-md:w-52 w-64' src={require('../../images/promotion.png')} alt=''/>
          

        </section>

        <section className='flex max-md:flex-col items-center justify-center max-md:gap-0 max-md:mb-10 mb-16 gap-56'>
          <img className='max-md:w-40 w-56' src={require('../../images/result.png')} alt=''/>

          <div className='max-md:w-[80vw] w-[400px] '>
            <h1 className='max-sm:text-4xl text-6xl mb-2 font-bold text-[#696969]'>04</h1>

            <h3 className='mb-2 font-medium max-md:text-[19px] text-[21px]'>Results</h3>

            <p className='text-[#565656] max-md:text-[16px] text-[18px]'>Due to the right targeting, you receive views, new subscribers, likes and comments</p>
          </div>

        </section>

      </div>

    </div>
  )
}

export default Works