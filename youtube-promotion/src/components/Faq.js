import { useContext, useEffect } from 'react'
import { accordionData } from '../utils/constantData'
import Accordian from './subComponents/Accordian'
import MyContext from '../context/MyContext'
import { useNavigate } from 'react-router-dom'

const Faq = () => {

    const [, setSelectedItem] = useContext(MyContext);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handleContactRedirect = () => {
        setSelectedItem(3);
        navigate('/contact');
    }

    return (
        <div>
            {/* Section Image */}
            <section className='pt-20 flex max-md:flex-col items-center justify-around bg-gradient-to-r from-[#FAC16B] to-[#df911b]'>
                <h2 className="text-5xl max-md:text-3xl max-md:mt-10 max-md:px-10 text-center font-bold text-zinc-800 md:w-[400px] leading-[3.25rem]">
                    Frequently asked questions
                </h2>
                <img className='max-md:h-40 h-64 object-cover' src={require('../images/faq-main.png')} alt='' />
            </section>

            {/* Section Content */}
            <section className="py-14 pb-16 bg-[#fff]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">

                    <h1 className='w-[100%] text-center text-3xl max-md:text-[26px] font-medium text-zinc-700 mb-14 max-sm:px-5'>Got Questions? We've Got Answers!</h1>
 
                    <div className='flex max-md:flex-col max-md:items-center w-[100%] max-md:gap-10 justify-around items-start'>

                        <div className=''>
                            <img className='h-[250px] max-md:h-[200px]' src={require('../images/faq.png')} alt='' />
                        </div>



                        <div className="accordion-group mx-2 md:w-[45vw]" data-accordion="default-accordion">
                            <Accordian title={accordionData[0].title} content={accordionData[0].content} />
                            <Accordian title={accordionData[1].title} content={accordionData[1].content} />
                            <Accordian title={accordionData[2].title} content={accordionData[2].content} />
                            <Accordian title={accordionData[3].title} content={accordionData[3].content} />
                        </div>
                    </div>

                </div>
            </section>

            {/* Further questions */}
            <section className='w-[95vw] mb-7 mx-auto bg-gray-500 text-white'>
                <div className='text-center py-10 pt-8'>
                    <h1 className='text-[35px] max-md:text-[32px] font-bold pb-5 px-3'>Do you have further questions?</h1>
                    <p className='max-md:text-[16px] text-[19px]'>Please feel free to contact: <span className='text-[#ffab2d] hover:text-black'><a href='tel:+918253000032'>+918253000032</a></span>
                        <br />
                        or email us at <span className='text-[#ffab2d] hover:text-black'><a href='mailto:info@younedia.com'>info@younedia.com</a></span>
                        <br />
                        We will be happy to assist you!
                    </p>

                    <p className='text-zinc-800 font-semibold text-4xl max-md:text-3xl mt-3 '>OR</p>

                    <button
                        onClick={handleContactRedirect}
                        className='mt-3 mx-auto py-2 px-5 bg-[#D88B0F] hover:opacity-80 text-lg max-md:text-base font-medium text-white'
                    >
                        Send us a Message
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Faq