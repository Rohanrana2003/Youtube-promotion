/* eslint-disable react-hooks/exhaustive-deps */
import { auth } from '../utils/FirebaseConfig'; // Import your Firebase config
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom'; // For navigation
import logo from '../images/younedia.png';
import { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import { headerItems } from '../utils/constantData';

const Header = ({ user, onSignOut, setUser, showButton, setShowButton, redirectToAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showHeader, setShowHeader] = useContext(MyContext);
  const [selectedItem, setSelectedItem] = useContext(MyContext);
  const navigate = useNavigate(); // Use React Routser's useNavigate for redirecting
  const location = useLocation(); 
  // const headerItems = [
  //   { id: 1, label: 'Faq' },
  //   { id: 2, label: 'About' },
  //   { id: 3, label: 'Contact' },
  // ]

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
        navigate('/youtube-link')
      }
      else {
        setUser(null)
        navigate('/')
      }
    })
    setSelectedItem(null);
    window.scrollTo(0, 0);

    return () => unsubscribe();
  }, [])

  // For Header transparency
  useEffect(() => {
    const handleScroll = () => {

      if (location.pathname !== '/' && location.pathname !== '/auth' && location.pathname !== '/password-reset') {
        setShowHeader(true) //Add header background
        return;
      }

      const currentScrollPos = window.pageYOffset;
      setPrevScrollPos(currentScrollPos)

      currentScrollPos > 100 ? setShowHeader(true) : setShowHeader(false);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, location])

  const handleSignOut = async () => {
    try {
      await signOut(auth);   // Sign out the user from Firebase
      setIsOpen(false)       // Close dropdown
      onSignOut(); // Set user to null in App.js
      navigate('/'); // Redirect to the Main page
      setShowButton(true); // Show the Login button on header
    } catch (error) {
      console.error('Sign Out Error', error);
    }
    setSelectedItem(null); // Update selected button in header
  };

  const handleLogoClick = () => {
    navigate('/')
    window.scrollTo(0, 0);
    setShowButton(true) // Show the Login button on header
    setSelectedItem(null); // Update selected button in header
    setShowHeader(false); //Remove header background
  };

  const handleButtonClick = (item) => {
    navigate(item.label)
    setSelectedItem(item.id); // Update selected button in header
    setShowButton(true) // Show the Login button on header
    setShowHeader(true); // Add header background
  };

  const handleLogin = () =>{
    setShowHeader(false); //Remove header background
    redirectToAuth();
  }

  return (
    <header className={`px-6 py-2 z-30 fixed w-full transition-all duration-300 ease-in-out text-white flex justify-between items-center ${showHeader ? 'bg-zinc-900 shadow-header-shadow shadow-black' : 'bg-transparent'}`}>

      <div className='flex items-center justify-between gap-12'>
        {/* Logo and Main Heading */}
        <div className="flex items-center">
          <img onClick={handleLogoClick} src={logo} alt="Logo" className="h-14 cursor-pointer" />
          <h1 onClick={handleLogoClick} className="ml-4 text-[#D88B0F] text-3xl font-[700] cursor-pointer">YouTube <span className='text-white'>Promotion</span></h1>
        </div>

        {/* Header buttons */}
        <div className='flex gap-10 mt-[5px]'>

          {
            headerItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleButtonClick(item)}
                className={`hover:text-[#DB880F] text-lg ${selectedItem === item.id ? "text-[#DB880F]" : "text-white"}`}
              >
                {item.label}
              </button>
            ))
          }

        </div>
      </div>

      {/* Home page Login button  */}
      {
        !user && showButton && showHeader &&
        <button onClick={handleLogin} 
            className=' bg-[#D88B0F] font-bold text-[21px] transition-all ease-in duration-100 hover:scale-[.96] absolute right-7 top-4  px-7 py-1  hover:shadow-none  shadow-black shadow-custom text-[#27272A]'>
            Login</button>
      }

      {/* Form page Drop-down */}
      <div className="flex items-center">
        {user ? (
          <div className="flex items-center " onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>

            <div className='relative border shadow-black shadow border-gray-500 hover:border-[#D88B0F]  p-2 rounded-lg pr-0 cursor-pointer'>
              <div className='flex gap-2 mr-3 items-center' >
                {!user.photoURL ?
                  (<img
                    src={require('../images/userIcon.png')}
                    alt='user'
                    className="w-8 rounded-full mx-1"
                  />)
                  : (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'Profile'}
                      className="w-7 h-7 rounded-full ml-2"
                    />
                  )}
                <span className='font-medium text-lg mr-1 mt-[2px]'>{user.displayName || 'User'}</span>
                <img className='h-[8px] mt-1 mr-1' src={require('../images/down-arrow.png')} alt='' />
              </div>

              {
                isOpen
                &&
                <ul className='shadow-black shadow bg-gray-700 w-[95%] bg-opacity-90 text-center rounded absolute right-0 top-[45px]'>
                  <li className='hover:text-[#D88B0F] hover:bg-black after:block after:h-[1px] after:mt-1 after:bg-black text-white text-[14px]  my-1 mt-3 py-[3px] px-6   cursor-pointer'><a href='https://www.younedia.com/contact-us' rel='noreferrer' target='_blank'>Contact Us</a> </li>
                  <li className='hover:text-[#D88B0F] hover:bg-black after:block after:h-[1px] after:mt-1 after:bg-black text-white text-[14px]  my-1 py-[3px] px-6   cursor-pointer'><a href='https://www.younedia.com/about-us' rel='noreferrer' target='_blank'>About Us</a> </li>
                  <li className='hover:text-red-700 hover:bg-black text-white text-[14px] my-1 mb-3 py-[3px] px-6  cursor-pointer' onClick={handleSignOut}>Logout</li>
                </ul>
              }
            </div>
            {/* <button 
              onClick={handleSignOut}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </button> */}


          </div>
        ) : (
          <p></p>
        )}
      </div>
    </header>
  );
};
export default Header;