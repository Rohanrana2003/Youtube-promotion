import { useContext, useEffect } from 'react';
import WhyChoose from './subComponents/WhyChoose';
import MyContext from '../context/MyContext';

const About = ({ redirectToAuth }) => {

    const { setSelectedItem } = useContext(MyContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className=''>
            {/* Section Top */}
            <section className='pt-20 flex max-md:flex-col items-center justify-around bg-gradient-to-r from-[#FAC16B] to-[#df911b]'>
                <h2 className="max-md:text-3xl max-md:mt-10 max-md:px-10 text-5xl text-center font-bold text-zinc-800 leading-[3.25rem]">
                    About us
                </h2>
                <img className='h-64 max-md:h-40 object-cover max-md:my-5' src={require('../images/about-main.png')} alt='' />
            </section>

            {/* Main section */}
            <section className=' flex flex-col items-center max-md:mb-10 mb-20'>

                <div className='text-center w-[70vw] max-md:w-[80vw] max-md:text-sm text-base'>
                    <h1 className='mt-14 mb-10 text-zinc-700 text-3xl mx-auto  font-medium max-sm:w-[200px]'>DISCOVER WHO WE ARE</h1>

                    <p className='text-justify mb-4'>
                        YouNedia is a one-stop shop for web design and development as well as a digital marketing firm committed to providing the greatest digital marketing solutions along with safe, responsive, and effective websites. We provide our valued clients with superior business solutions by utilising contemporary technology. With more than five years of experience, we take great pride in our exceptional professionalism, work ethic, and thorough understanding of producing effective, customised outcomes.
                    </p>

                    <div className='h-52 w-full border'>
                        <img className='h-full w-full  object-cover' src={require('../images/about.jpeg')} alt='' />
                    </div>

                    <p className='text-justify my-4'>
                    With marketers, designers, and developers on our team, we understand what it takes to get tangible online outcomes. We also concentrate on the most important KPIs, such as leads and revenue. We are aware that accomplishing these objectives propels companies forward, and our best performance indicator is the success of our clients. Our years of expertise have also shown us that, although each channel has its own benefits, they all function best when combined with other channels in a smart manner. To boost visibility, conversions, and revenue, we employ a variety of digital platforms and provide full-service plans to each of our clients. Consequently, we have generated more than one million leads for our customers.  With more than 40 in-house influencers committed to establishing connections and obtaining publication on well-known websites, we have also assembled the most connected media team in the sector.
                    </p>
                </div>
            </section>

            {/* Our Vision section */}
            <section className=' flex  justify-center mb-5'>

                <div className='w-[70vw] max-md:w-[90vw] flex items-center max-lg:flex-col'>

                    <div className='bg-[#EBA63E] px-8 py-6'>
                        <h1 className='my-2 text-zinc-800 text-xl font-medium'>OUR MISSION</h1>
                        <p className='text-justify max-md:text-[15px]'>
                            At YouNedia, our vision is to empower businesses to thrive in the ever-evolving digital landscape. We aim to be a trailblazer in the digital marketing industry, delivering innovative, results-driven strategies that not only meet our client's goals but exceed their expectations.
                        </p>
                    </div>

                    <div className='relative lg:min-w-[450px]'>
                        <img className='w-full' src={require('../images/about-mission.jpg')} alt='' />
                        <button
                            onClick={() => { redirectToAuth(); setSelectedItem(1) }}
                            className='absolute bottom-5 right-[80px] md:right-[104px] py-3 px-10 max-md:px-5 text-[#D88B0F] text-lg max-md:text-base font-medium bg-white shadow-md shadow-black hover:shadow-none transition-all ease-in duration-100 hover:scale-[.99]'
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