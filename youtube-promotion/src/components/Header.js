/* eslint-disable react-hooks/exhaustive-deps */
import { auth } from '../utils/FirebaseConfig'; // Import your Firebase config
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom'; // For navigation
import logo from '../images/younedia.webp';
import { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import { dropdownItems } from '../utils/constantData';

const Header = ({ user, onSignOut, setUser, showButton, setShowButton, redirectToAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  const { showHeader, setShowHeader, selectedItem, setSelectedItem } = useContext(MyContext);
  const navigate = useNavigate(); // Use React Routser's useNavigate for redirecting
  const location = useLocation();

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
    setSelectedItem(1);
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

      currentScrollPos > 50 ? setShowHeader(true) : setShowHeader(false);
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
      setShowButton(false); // Show the Login button on header
      setShowHeader(false);
      setSelectedItem(1); // Update selected button in header
    } catch (error) {
      console.error('Sign Out Error', error);
    }
  };

  const handleLogoClick = () => {
    navigate('/')
    window.scrollTo(0, 0);
    // setShowButton(true) // Show the Login button on header
    setSelectedItem(1); // Update selected button in header
    setShowHeader(false); //Remove header background
  };

  const handleButtonClick = (item) => {
    if (item.label === 'Home') {
      setShowHeader(false);
    }
    else {
      setShowHeader(true);
    }
    window.scrollTo(0, 0);
    navigate(item.path)
    setSelectedItem(item.id); // Update selected button in header
    setShowButton(true) // Show the Login button on header
    setShowMenu(true); // Close Side menu
  };

  const handleDropdownButtonClick = (item) => {
    navigate(item.path)
    setSelectedItem(item.id); // Update selected button in header
  };

  const handleLogin = () => {
    setShowHeader(false); //Remove header background
    redirectToAuth();
  }

  return (
    <header className={`px-4 py-2 z-30 fixed w-screen transition-all duration-300 ease-in-out text-white flex justify-between items-center ${showHeader ? 'bg-zinc-900 shadow-header-shadow shadow-black' : 'bg-transparent'}`}>

      <div className='flex items-center justify-between gap-8 md:gap-12'>
        {/* Logo and Main Heading */}
        <div className="flex items-center">
          <img onClick={handleLogoClick} src={logo} alt="Logo" className=" h-14 cursor-pointer" />
          <h1 onClick={handleLogoClick} className="ml-4 max-md:ml-1 text-[#D88B0F] max-sm:w-10 max-sm:text-[19px] text-3xl font-[600] cursor-pointer max-md:leading-[25px]">YouTube <span className='text-white'>Promotion</span></h1>
        </div>

        {/* Header buttons */}
        <div className='flex md:gap-8 mt-[5px] max-md:hidden'>
          {dropdownItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleButtonClick(item)}
              className={`hover:text-[#DB880F] text-lg ${selectedItem === item.id ? "text-[#DB880F]" : "text-white"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Side bar */}
      <div className={`absolute top-0 left-0 flex flex-col  mt-[5px] bg-[#18181B] h-screen w-[300px] md:hidden ${showMenu ? 'hidden' : 'close'}`}>
        <img src={logo} alt="Logo" className="h-32 w-32 m-5 mb-10 cursor-pointer" />
        {dropdownItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleButtonClick(item)}
            className={`bg-slate-900 my-2 py-3 text-lg  ${selectedItem === item.id ? "text-[#DB880F]" : "text-white"}`}
          >
            {item.label}
          </button>
        ))}
        {/* Copyright Section */}
        <div className="mt-8 flex w-full justify-center gap-2 items-center absolute bottom-20 -left-5">
          <img className='h-10' src={require('../images/younedia.webp')} alt='younedia' />
          <span>&copy; {new Date().getFullYear()} YOUNEDIA <br />All Rights Reserved.</span>
        </div>
      </div>


      {/* Login button  */}
      {
        !user && showButton && showHeader &&
        <button onClick={handleLogin}
          className=' bg-[#D88B0F] max-md:hidden font-bold text-[21px] transition-all ease-in duration-100 hover:scale-[.96] absolute right-7 top-4  px-7 py-1  hover:shadow-none  shadow-black shadow-custom text-[#27272A]'>
          Login</button>
      }

      {/* Hamburger Button */}
      {!user && <div>
        {showMenu ? <img className='w-7 absolute right-8 top-5 cursor-pointer md:hidden' onClick={() => setShowMenu(false)} src={require('../images/menu-open.webp')} alt='' />
          : <img className='w-5 absolute right-8 top-6 cursor-pointer md:hidden' onClick={() => setShowMenu(true)} src={require('../images/menu-close.webp')} alt='' />}
      </div>}

      {/* Form page Drop-down */}
      <div className="flex items-center">
        {user ? (
          <div className="flex items-center " onMouseOver={() => setIsOpen(true)} onClick={() => setIsOpen(!isOpen)} onMouseLeave={() => setIsOpen(false)}>

            <div className={`relative border shadow-black shadow p-2 rounded-lg pr-0 cursor-pointer ${!isOpen ? 'border-gray-500' : 'border-[#D88B0F]'} `}>
              <div className='flex gap-2 mr-3 items-center' >
                {!user.photoURL ?
                  (<img
                    src={require('../images/userIcon.webp')}
                    alt='user'
                    className="w-8 max-md:w-6 rounded-full mx-1 max-md:mx-0"
                  />)
                  : (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'Profile'}
                      className="w-7 h-7 max-md:w-6 max-md:h-6 rounded-full ml-2 max-md:ml-1"
                    />
                  )}
                <span className='font-medium text-lg max-md:text-base mr-1 max-md:mr-0 mt-[2px]'>{user.displayName || 'User'}</span>
                <img className='h-[8px] max-md:h-[7px] mt-1 mr-1 max-md:mr-0' src={require('../images/down-arrow.webp')} alt='' />
              </div>
              {
                isOpen
                &&
                <ul className='shadow-black shadow bg-gray-800 w-[95%] bg-opacity-90 text-center rounded absolute right-0 top-[47px]'>
                  {
                    dropdownItems.map((item) => (
                      <li key={item.id} onClick={() => handleDropdownButtonClick(item)}
                        className={`hover:text-[#D88B0F] hover:bg-black after:block after:h-[1px] after:mt-1 hover:after:bg-black after:bg-[#5e5e5e] text-[14px]  
                                    my-1 py-[3px] px-6  max-md:px-4 max-md:text-[13px] cursor-pointer ${selectedItem === item.id ? "text-[#DB880F]" : "text-white"}`}
                      >
                        {item.label}
                      </li>
                    ))
                  }
                  <li className='hover:bg-red-800 bg-red-700 text-white mx-5 max-md:text-[13px] text-[14px] my-1 mb-3 py-[3px] px-3  cursor-pointer' onClick={handleSignOut}>Logout</li>
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