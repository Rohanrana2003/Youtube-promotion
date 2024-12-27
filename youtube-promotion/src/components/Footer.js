import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { mailIcon, phoneIcon } from '../utils/constants';


const Footer = () => {
  return (
    <footer className="p-10 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8  text-center md:text-left">

        {/* Join our Community Section */}
        <div className="flex-1" >
          <h2 className="text-lg text-[#D29B2D] font-semibold mb-2">Join our Community!</h2>
          <div className='ml-1 text-[15px] font-normal text-gray-300'>
            <p><a className='hover:text-gray-400 flex items-center gap-[6px]' href='mailto:info@younedia.com'><span>{mailIcon}</span>info@younedia.com</a></p>
            <p className='flex gap-[6px] items-center'><span>{phoneIcon}</span> Call or Whatsapp: <a href="tel:+918253000032" className="hover:text-gray-400 ">+91 8253000032</a></p>
            <p>721, 7th Floor, Zone 3, Unity Homeland,<br />CP 67, Sector 67, Mohali, Punjab 160062</p>
          </div>
        </div>

        {/* Agency Info Section */}
        <div className="flex-1">
          <h2 className="text-lg text-[#D88B0F] font-semibold mb-2">YouTube Promotion With YouNedia</h2>
          <p className='ml-1 text-[15px] font-normal text-gray-300'>Best Digital Marketing Agency in Mohali</p>
        </div>

        {/* Get in Touch Section */}
        <div className="flex-1 ">
          <h2 className="text-lg text-[#D88B0F] font-semibold mb-3">Get in Touch!</h2>
          <ul className="mb-4 ml-1 font-normal text-gray-300">
            <li><a href="https://www.younedia.com/blog" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400 " >Blogs</a></li>
            <li><a href="https://www.younedia.com/privacy-and-refund-policies" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400 ">Privacy & Refund Policy</a></li>
            <li><a href="https://www.younedia.com/faq" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400 ">Frequently Asked Questions</a></li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-3">
            <a href="https://www.instagram.com/younediaunfiltered/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://www.facebook.com/YouNedia/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="https://twitter.com/YouNedia" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://in.linkedin.com/company/younedia" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 flex w-full justify-center gap-2x` items-center">
        <img className='h-10' src={require('../images/younedia.png')} alt='younedia'/>
        <span>&copy; {new Date().getFullYear()} YOUNEDIA All Rights Reserved.</span>
        
      </div>
    </footer>
  );
};
export default Footer;
