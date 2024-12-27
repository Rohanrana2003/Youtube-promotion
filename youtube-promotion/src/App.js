import React, { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Auth from './components/Auth';
import YouTubeForm from './components/YouTubeForm';
import Header from './components/Header';
import ForgotPassword from './components/ForgotPassword';
import Main from './components/Main';
import Faq from './components/Faq';
import About from './components/About';
import Contact from './components/Contact';
import MyContext from './context/MyContext';

function App() {
  const [user, setUser] = useState(null); // Store the authenticated user
  const [authPage, setAuthPage] = useState(true); // Store the authenticated user
  const [selectedItem, setSelectedItem] = useState(null); // handle selected Header buttons
  const [showHeader, setShowHeader] = useState(false); // handle hide/show header
  const navigate = useNavigate()


  // Callback to handle successful authentication
  const handleAuthSuccess = (authenticatedUser) => {
    console.log(authenticatedUser)
    setUser(authenticatedUser); // Set the user once authenticated
  };

  // Callback to handle sign-out
  const handleSignOut = () => {
    setUser(null); // Set user to null after sign-out
  };

  //Redirect to Login/Signup page
  const redirectToAuth = () => {
    setAuthPage(false);
    navigate('/auth')
    setSelectedItem(null);
}
 
  return (
      <MyContext.Provider value={[selectedItem, setSelectedItem,showHeader, setShowHeader ]}>
        <Header user={user} onSignOut={handleSignOut} setUser={setUser} showButton={authPage} setShowButton={setAuthPage} redirectToAuth={redirectToAuth}/>
        <Routes>
          {/* Route for Main Page */}
          <Route
            path="/"
            element={user ? <Navigate to="/youtube-link" /> : <Main redirectToAuth={redirectToAuth} />}
          />
          {/* Route for authentication */} 
          <Route
            path="/auth"
            element={user ? <Navigate to="/youtube-link" /> : <Auth onAuthSuccess={handleAuthSuccess} />}
          />

          <Route
            path="/faq"
            element={<Faq />}
          />

          <Route
            path="/about"
            element={<About redirectToAuth={redirectToAuth} />}
          />

          <Route
            path="/contact"
            element={<Contact redirectToAuth={redirectToAuth}/>}
          />

          {/* Route for YouTube form, only accessible if user is authenticated */}
          <Route
            path="/youtube-link"
            element={user ? <YouTubeForm user={user} /> : <Navigate to="/" />}
          />

          <Route
            path='/password-reset'
            element={<ForgotPassword />}
          />
        </Routes>
      </MyContext.Provider>
  );
}
export default App;
