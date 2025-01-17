import { useEffect } from 'react';
import GetStarted from './subComponents/GetStarted'


const Contact = ({ redirectToAuth }) => {

    useEffect(() =>{
        window.scrollTo(0, 0);
    }, []) 
    
    return (
        <div>
            {/* Section Image */}
            <section className='pt-20 flex max-md:flex-col items-center justify-around bg-gradient-to-r from-[#FAC16B] to-[#df911b]'>
                <h2 className="max-md:text-3xl max-md:mt-10 max-md:px-10 text-5xl text-center font-bold text-zinc-800 leading-[3.25rem]">
                    Contact us
                </h2>
                <img className='h-64 max-md:h-40 object-cover max-md:my-5' src={require('../images/contact-main.webp')} alt='' />
            </section>


            {/* Section Form */}
            <section className=' w-[100%] flex flex-col items-center'>

                <h1 className='mt-14 mb-10 text-3xl font-medium text-zinc-700 text-center px-5'>Let Us Know What’s on Your Mind </h1>

                <form className='flex flex-col w-[80vw] text-center mb-20'
                    action="https://formspree.io/f/myzyapnz" method="POST">

                    <div className='w-[100%] flex gap-5 max-md:gap-2 mb-5 max-md:mb-2 justify-center'>
                        <input
                            className='border-[2px] max-md:border-[1px] border-neutral-600 text-neutral-600 rounded-xl max-md:rounded-lg w-[50%] py-4 px-5 max-md:py-3  max-md:px-3
                            text-lg max-md:text-base focus:border-[#DB880F] focus:outline-none'
                            type='text'
                            name='name'
                            placeholder='Your Name*'
                            required
                        />

                        <input
                            className='border-[2px] max-md:border-[1px] border-neutral-600 text-neutral-600 rounded-xl max-md:rounded-lg w-[50%] 
                                    py-4 px-5 max-md:px-3 max-md:py-3 text-lg max-md:text-base focus:border-[#DB880F] focus:outline-none'
                            type='email'
                            name='email'
                            placeholder='Email*'
                            required
                        />
                    </div>

                    <input
                            className='border-[2px] max-md:border-[1px] border-neutral-600 text-neutral-600 rounded-xl max-md:rounded-lg py-4 max-md:mb-2 mb-5 
                                px-5 max-md:px-3 max-md:py-3 text-lg  max-md:text-base focus:border-[#DB880F] focus:outline-none'
                            type='text'
                            name='topic'
                            placeholder='Subject (optional)'
                        />

                    <textarea
                        className='border-[2px] max-md:border-[1px] border-neutral-600 text-neutral-600 rounded-xl max-md:rounded-lg py-4 px-5 text-lg max-md:text-base 
                             max-md:px-3 max-md:py-3 min-h-48 max-h-48 focus:border-[#DB880F] focus:outline-none'
                        name='message'
                        placeholder='Type Your Message...'
                        required
                    />

                    <button
                        type='submit' 
                        className='mt-6 mx-auto py-3 px-16 max-md:px-10 max-md:py-3 bg-[#D88B0F] hover:opacity-80 rounded-xl max-md:rounded-lg  text-lg max-md:text-base font-medium text-white'
                    >
                        Send Message
                    </button>
                </form>
            </section>

            {/* Start Promotion Section */}
            <section>
                <GetStarted redirectToAuth={redirectToAuth}/>
            </section>
        </div>
    )
}

export default Contact