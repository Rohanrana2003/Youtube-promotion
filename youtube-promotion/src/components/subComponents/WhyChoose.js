import React from "react";

const WhyChoose = () => {
    return (
        <div className="bg-white flex flex-col items-center py-16">
            <h1 className="mb-3 font-semibold text-[38px] text-zinc-800">Why choose us?</h1>
            <p className="mb-5 text-zinc-600">Your Success Is Our Top Priority – Let Us Help You Achieve Your Goals with Confidence</p>

            <p className="w-20 h-1 rounded-3xl bg-[#D88B0F]"></p>

            <div className="flex flex-row gap-10 mt-5 mb-7">

                <div className="w-[350px] group px-6 py-8 flex flex-col items-center gap-3 rounded-2xl  border border-[#D88B0F] bg-[#fffcf6] hover:bg-[#696969] hover:border-none transition-all duration-300 cursor-pointer hover:scale-[1.03]">
                    <img className="w-16" src={require('../../images/why-reliability.png')} alt="" />
                    <h1 className="text-[25px] font-medium text-zinc-800 group-hover:text-white">Reliability</h1>
                    <p className="text-[#696969] text-[16px] text-center group-hover:text-gray-200">
                        Prodvigate is an official Google partner. We work only with YouTube Ads and well-known payment systems. You can cancel or pause your campaign at any time
                    </p>
                </div>

                <div className="w-[350px] group px-6 py-8 flex flex-col items-center gap-3 rounded-2xl border border-[#D88B0F] bg-[#fffcf6] hover:bg-[#696969] hover:border-none transition-all duration-300 cursor-pointer hover:scale-[1.03] ">
                    <img className="w-16" src={require('../../images/why-efficiency.png')} alt="" />
                    <h1 className="text-[25px] font-medium text-zinc-800 group-hover:text-white">Efficiency</h1>
                    <p className="text-[#696969] text-[16px] text-center group-hover:text-gray-200">
                        Our algorithms optimize your channel`s promotion in real time. This means your ad budget will be spent more efficiently. At the same time you can always ask us for further help or advice
                    </p>
                </div>

                <div className="w-[350px] group px-6 py-8 flex flex-col items-center gap-3 rounded-2xl border border-[#D88B0F] bg-[#fffcf6] hover:bg-[#696969] hover:border-none transition-all duration-300 cursor-pointer hover:scale-[1.03]">
                    <img className="w-16" src={require('../../images/why-convenience.png')} alt="" />
                    <h1 className="text-[25px] font-medium text-zinc-800 group-hover:text-white">Convenience</h1>
                    <p className="text-[#696969] text-[16px] text-center group-hover:text-gray-200">
                        We have made things as simple as possible. Keep creating your awesome content and don't waste your time with setting up your promotion. We will do it for you!
                    </p>
                </div>

            </div>
        </div>
    )
}

export default WhyChoose
