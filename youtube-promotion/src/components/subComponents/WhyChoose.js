import React from "react";

const WhyChoose = () => {
    return (
        <div className="bg-white flex flex-col items-center py-16">
            <h1 className="mb-3 font-semibold text-[38px] max-sm:text-[32px] text-zinc-800">Why choose us?</h1>
            <p className="mb-5 text-zinc-600 text-center px-5">Empowering Your Vision – Together, We’ll Turn Your Goals into Reality with Excellence</p>

            <p className="w-20 h-1 rounded-3xl bg-[#D88B0F]"></p>

            <div className="grid md:grid-cols-2 justify-center  lg:grid-cols-3 lg:gap-5 xl:gap-10 mt-5 mb-7">

                <div className="max-md:max-w-[80vw] w-[320px] max-sm:m-2 max-lg:m-5 group px-6 max-md:py-5 py-8 flex flex-col items-center gap-3 rounded-2xl  border border-[#D88B0F] bg-[#fffcf6] hover:bg-[#696969] hover:border-none transition-all duration-300 cursor-pointer hover:scale-[1.03]">
                    <img className="w-16 max-sm:w-14" src={require('../../images/why-reliability.webp')} alt="" />
                    <h1 className="text-[25px] max-sm:text-[22px] font-medium text-zinc-800 group-hover:text-white ">Reliability</h1>
                    <p className="text-[#696969] md:text-[14px] text-[16px] text-center group-hover:text-gray-200 ">
                        YouNedia is a trusted partner. We work only with YouTube Ads and Digital Marketing. You can contact our team at any time
                    </p>
                </div>

                <div className="max-md:max-w-[80vw] w-[320px] max-sm:m-2 max-lg:m-5 group px-6 max-md:py-5 py-8 flex flex-col items-center gap-3 rounded-2xl border border-[#D88B0F] bg-[#fffcf6] hover:bg-[#696969] hover:border-none transition-all duration-300 cursor-pointer hover:scale-[1.03] ">
                    <img className="w-16 max-sm:w-14" src={require('../../images/why-efficiency.webp')} alt="" />
                    <h1 className="text-[25px] max-sm:text-[22px] font-medium text-zinc-800 group-hover:text-white">Efficiency</h1>
                    <p className="text-[#696969] md:text-[14px] text-[16px] text-center group-hover:text-gray-200">
                        Our algorithms optimise the advertising of your video's in real time. Your advertising budget will be used more effectively as a result.
                    </p>
                </div>

                <div className="max-md:max-w-[80vw] w-[320px] max-sm:m-2 max-lg:m-5 group px-6 max-md:py-5 py-8 flex flex-col items-center gap-3 rounded-2xl border border-[#D88B0F] bg-[#fffcf6] hover:bg-[#696969] hover:border-none transition-all duration-300 cursor-pointer hover:scale-[1.03]">
                    <img className="w-16 max-sm:w-14" src={require('../../images/why-convenience.webp')} alt="" />
                    <h1 className="text-[25px] max-sm:text-[22px] font-medium text-zinc-800 group-hover:text-white">Convenience</h1>
                    <p className="text-[#696969] md:text-[14px] text-[16px] text-center group-hover:text-gray-200">
                        We've simplified things as much as we could. Don't waste time setting up your promotion, keep producing amazing content. We'll take care of it!
                    </p>
                </div>

            </div>
        </div>
    )
}

export default WhyChoose
