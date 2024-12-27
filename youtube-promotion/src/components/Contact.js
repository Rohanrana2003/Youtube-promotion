import { useEffect } from 'react';
import GetStarted from './subComponents/GetStarted'


const Contact = ({ redirectToAuth }) => {

    useEffect(() =>{
        window.scrollTo(0, 0);
    }, []) 
    
    return (
        <div>
            {/* Section Image */}
            <section className='pt-20 flex items-center justify-around bg-gradient-to-r from-[#FAC16B] to-[#df911b]'>
                <h2 className="text-5xl text-center font-bold text-zinc-800 leading-[3.25rem]">
                    Contact us
                </h2>
                <img className='h-64 object-cover' src={require('../images/contact-main.png')} alt='' />
            </section>


            {/* Section Form */}
            <section className='min-h-[100vh] w-[100%] flex flex-col items-center'>

                <h1 className='mt-14 mb-10 text-3xl font-medium text-zinc-700'>Let Us Know What’s on Your Mind </h1>

                <form className='flex flex-col w-[80vw] text-center mb-20'
                    action="https://formspree.io/f/myzyapnz" method="POST">

                    <div className='w-[100%] flex gap-5 mb-5 justify-center'>
                        <input
                            className='border-[2px] border-neutral-600 text-neutral-600 rounded-xl w-[50%] py-4 px-5 text-lg focus:border-[#DB880F] focus:outline-none'
                            type='text'
                            name='name'
                            placeholder='Your Name*'
                            required
                        />

                        <input
                            className='border-[2px] border-neutral-600 text-neutral-600 rounded-xl w-[50%] py-4 px-5 text-lg focus:border-[#DB880F] focus:outline-none'
                            type='email'
                            name='email'
                            placeholder='Email*'
                            required
                        />
                    </div>

                    <input
                            className='border-[2px] border-neutral-600 text-neutral-600 rounded-xl py-4 mb-5 px-5 text-lg focus:border-[#DB880F] focus:outline-none'
                            type='text'
                            name='topic'
                            placeholder='Subject (optional)'
                        />

                    <textarea
                        className='border-[2px] border-neutral-600 text-neutral-600 rounded-xl py-4 px-5 text-lg min-h-48 max-h-48 focus:border-[#DB880F] focus:outline-none'
                        name='message'
                        placeholder='Type Your Message...'
                        required
                    />

                    <button
                        type='submit'
                        className='mt-6 mx-auto py-3 px-16 bg-[#D88B0F] hover:opacity-80 rounded-xl  text-lg font-medium text-white'
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