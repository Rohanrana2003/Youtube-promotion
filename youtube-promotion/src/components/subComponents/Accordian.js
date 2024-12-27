import React, { useState } from 'react'
import { plusIcon, subtractIcon } from '../../utils/constants'

const Accordian = ({title, content}) => {

    const [active, setActive] = useState(false);


    return (
        <div
            className={`accordion border border-solid p-4 rounded-xl transition duration-500 hover:bg-[#fffcf6]    ${active ? "bg-[#fffcf6] border-[#D88B0F]" : "border-gray-400  "} mb-3 lg:p-4 active`}
            id="basic-heading-one-with-icon" 
        >
            <button
                className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 w-full transition duration-500 hover:text-[#D88B0F] ${active ? "font-medium text-[#D88B0F]" : "text-gray-900  "}`}
                aria-controls="basic-collapse-one-with-icon"
                onClick={()=>setActive(!active)}
            >
                <h5>{title}</h5>
 
                {active ? <span>{subtractIcon}</span> : <span>{plusIcon}</span>}
            </button>

            {/* Answer */}
    
                <div
                    id="basic-collapse-one-with-icon"
                    className={`accordion-content grid w-full transition-all duration-300 ease-in-out overflow-hidden pr-4 ${active ? "grid-rows-[1fr] opacity-100 " : "grid-rows-[0fr] opacity-0" }`}
                    aria-labelledby="basic-heading-one"
                    style={{ maxHeight: '250px' }}
                >
                    <p className="text-base text-gray-900 font-normal leading-6 overflow-hidden  ">
                        {content}
                    </p>
                </div>
            

        </div>
    )
}

export default Accordian    