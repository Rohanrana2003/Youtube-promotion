import { useEffect } from 'react';
import WhyChoose from './subComponents/WhyChoose';

const About = ({ redirectToAuth }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className=''>
            {/* Section Top */}
            <section className='pt-20 flex items-center justify-around bg-gradient-to-r from-[#FAC16B] to-[#df911b]'>
                <h2 className="text-5xl text-center font-bold text-zinc-800 leading-[3.25rem]">
                    About us
                </h2>
                <img className='h-64 object-cover' src={require('../images/about-main.png')} alt='' />
            </section>

            {/* Main section */}
            <section className=' flex flex-col items-center mb-20'>

                <div className='text-center w-[70vw]'>
                    <h1 className='mt-14 mb-10 text-zinc-700 text-3xl font-medium'>DISCOVER WHO WE ARE</h1>

                    <p className='text-justify mb-4'>
                        YouNedia is a one-stop solution for web design and development and a digital marketing agency dedicated to delivering secure, responsive, and results-driven websites with the best digital marketing solutions. We use modern technology to deliver better business solutions for our esteemed clients. With over 5+ years of experience, we're proud of our outstanding work ethic, professionalism, and comprehensive knowledge of delivering bespoke, successful results.
                    </p>
                    <img className='w-[70vw]' src={require('../images/about.jpeg')} alt='' />

                    <p className='text-justify my-4'>
                        Our team comprises marketers, designers, and developers; we know what it takes to get real results online. We also focus on the metrics that mean the most, like leads and revenue generated. We know that achieving these goals drives businesses forward, and our clients' success is our best performance measure. Through our years of experience, we've also learned that while each channel has its advantages, they all work best when strategically paired with other channels. That's why we offer full-service strategies to each of our clients and use a combination of digital channels to increase visibility, conversions, and revenue. As a result, we've driven over 1 million leads for our clients. We've also built the most connected media team in the industry, with over 40 in-house influencers dedicated to building relationships and earning publication on prominent websites.
                    </p>
                </div>


            </section>

            {/* Our Vision section */}
            <section className=' flex justify-center mb-5'>

                <div className='w-[70vw] flex items-center '>

                    <div className='bg-[#EBA63E] px-8 py-6'>
                        <h1 className='my-2 text-zinc-800 text-xl font-medium'>OUR MISSION</h1>
                        <p className='text-justify'>
                            At YouNedia, our vision is to empower businesses to thrive in the ever-evolving digital landscape. We aim to be a trailblazer in the digital marketing industry, delivering innovative, results-driven strategies that not only meet our client's goals but exceed their expectations.
                        </p>
                    </div>

                    <div className='relative min-w-[450px]'>
                        <img className='w-full' src={require('../images/about-mission.jpg')} alt='' />
                        <button
                            onClick={redirectToAuth}
                            className='absolute bottom-5 right-[104px]  py-3 px-10 text-[#D88B0F] text-lg font-medium bg-white shadow-md shadow-black hover:shadow-none transition-all ease-in duration-100 hover:scale-[.99]'
                        >
                            Start Promotion
                        </button>
                    </div>

                </div>

            </section>

            {/* Why Choose Us? */}
            <section>
                <WhyChoose />
            </section>

        </div>
    )
}

export default About