import React from 'react'
import { SummarizeData } from '../../utils/constantData'


const Summarize = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-20 mx-auto">
                <div className="text-center mb-10">
                    <h1 className="sm:text-[42px] text-2xl font-medium text-center title-font text-[#D88B0F] mb-4">Key Takeaways</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
                        This summary captures the highlights of the content, ensuring you have a solid understanding of the crucial information.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

                    {
                        SummarizeData.map((data) => (
                            <div key={data.id} className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-2 h-full items-center">
                                   <img className='w-10 mx-2' src={data.img} alt=''/>  
                                    <span className="title-font font-medium">{data.desc}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Summarize