/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/FirebaseConfig";
import { countries } from "../utils/constantData";
import MyContext from "../context/MyContext";

const CombinedForm = ({ user }) => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [urlError, setUrlError] = useState(false);
  const [country, setCountry] = useState("");
  const [budget, setBudget] = useState("");
  const [isForeign, setIsForeign] = useState(false);
  const [duration, setDuration] = useState("");
  const [views, setViews] = useState(0);
  const [, setShowHeader] = useContext(MyContext);

  // List of countries for the dropdown
  // const countries = [
  //   "United States",
  //   "Canada",
  //   "United Kingdom",
  //   "Australia",
  //   "India",
  //   "Germany",
  //   "France",
  //   "Spain",
  //   "Italy",
  //   "Brazil",
  //   "Mexico",
  //   "Japan",
  //   "South Korea",
  //   "China",
  //   "Russia",
  //   "South Africa",
  // ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => console.log("Razorpay script loaded");
    script.onerror = () => console.error("Failed to load Razorpay script");
    document.body.appendChild(script);
    setShowHeader(true);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    let baseViews = (parseFloat(budget) / 100) * 20000; // 100 dollars = 5000 views
    let newViews = baseViews || 0; // Default to 0 if baseViews is NaN

    // Increase views for longer duration (10 to 20 minutes)
    if (duration === "10 to 20") {
      newViews *= 0.5; // Increase views by 20% for longer videos
    }
    // Decrease views for shorter duration (6 to 10 minutes)
    else if (duration === "6 to 10") {
      newViews *= 0.8; // Decrease views by 20% for shorter videos
    }
    // Decrease views for foreign countries
    if (isForeign) {
      newViews *= 0.5; // Decrease views by 20% for foreign countries
    } else if (country === "India" && duration === "0 to 3") {
      newViews *= 1.3; // Increase views by 30% for short duration in India
    }
    setViews(Math.floor(newViews));
  }, [budget, isForeign, duration, country]);

  const extractVideoId = (url) => {
    const standardUrlMatch = url.match(/v=([a-zA-Z0-9_-]{11})/);
    const shortUrlMatch = url.match(/youtu.be\/([a-zA-Z0-9_-]{11})/);
    const embedUrlMatch = url.match(/embed\/([a-zA-Z0-9_-]{11})/);
    const shortsUrlMatch = url.match(/shorts\/([a-zA-Z0-9_-]{11})/);

    if (standardUrlMatch) return standardUrlMatch[1];
    if (shortUrlMatch) return shortUrlMatch[1];
    if (embedUrlMatch) return embedUrlMatch[1];
    if (shortsUrlMatch) return shortsUrlMatch[1];
    return "";
  };

  const handleUrlChange = (e) => {

    const url = e.target.value;

    setYoutubeUrl(url);
    const videoId = extractVideoId(url);

    if (videoId) {
      setThumbnailUrl(`https://www.youtube.com/embed/${videoId}`);
      setUrlError(false);
    } else {
      setThumbnailUrl("");
      setUrlError(true);
    }
  };
  const handleLocationChange = (e) => {
    setCountry(e.target.value);
    setIsForeign(e.target.value !== "India"); //Assuming 'India' is your local country
  };

  const handlePayment = () => {
    if (typeof window.Razorpay === "undefined") {
      alert(
        "Razorpay SDK is not loaded. Please check your internet connection."
      );
      return;
    } 
    const usdToInrConversionRate = 80; // Example conversion rate
    const budgetInINR = parseFloat(budget) * usdToInrConversionRate * 100; // Convert to paisa
    const options = {
      key: 'rzp_test_DvwtNaJvTOM4Y6c', // Replace with your Razorpay test key ID
 
      amount: budgetInINR,
      currency: "INR",
      name: "Video Promotion Payment",
      description: "Promotion Payment",
      handler: function (response) {
        console.log("Payment successful:", response);
        const formData = {
          youtubeUrl,
          targetCountry: country,
          views,
          duration,
          isForeign,
          budgetInUSD: budget,
          budgetInINR: budgetInINR / 100,
        };
        savePaymentToFirestore(formData, response.razorpay_payment_id);
      },
      prefill: {
        name: user?.displayName || "Guest",
        email: user?.email || "guest@example.com",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const savePaymentToFirestore = async (formData, paymentId) => {
    try {
      // Add a new document to the 'payments' collection
      const docRef = await addDoc(collection(db, 'payments'), {
        ...formData,
        paymentId,
        timestamp: new Date(),
        userName: user?.displayName || "Guest",  // Adding user name
        userEmail: user?.email || "guest@example.com",  // Adding user email
      });
      console.log("Payment details successfully saved to Firebase", docRef.id);
      alert("Payment details successfully saved!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("youtubeUrl:", youtubeUrl);
    console.log("duration:", duration);
    console.log("country:", country);
    console.log("budget:", budget);

    if (!youtubeUrl || !duration || !country || !budget) {
      alert("Please fill out all required fields.");
      return;
    }
    try {
      handlePayment();
    } catch (error) {
      console.error("Payment handling error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-4 pt-20">
      {/* Black transparent Background  */}
      <div className='fixed top-0 h-screen object-cover w-[100%]  bg-black opacity-25 -z-10' ></div>

      {/* Background Image  */}
      <div className="top-0 fixed h-[100vh]  -z-20">
        <img className='h-screen w-screen after:absolute after:content-[""] after:w-[100vw] after:h-[100vh] after:bg-black object-cover' src={require('../images/youtube-background.jpg')} alt='bg' />
      </div>

      {/* Form area */}
      <div className="bg-zinc-900 bg-opacity-70 p-8 px-16 max-sm:px-4 rounded-md shadow-black shadow-md max-w-[630px] w-full text-white">
        <h1 className="text-4xl max-md:text-2xl  font-semibold text-center mb-6">
          Start Your <span className="text-[#D88B0F]">Promotion</span>
        </h1>
        <img className="absolute mt-[13px] ml-[12px] h-8 max-sm:h-6 flex z-10 items-center " src={require('../images/youtube.png')} alt="youtube" />

        <input
          type="text"
          value={youtubeUrl}
          onChange={handleUrlChange}
          placeholder="Paste YouTube Link"
          className="w-full pl-[70px] max-sm:pl-[50px] max-sm:text-[15px] p-4 max-sm:py-3 mb-4 rounded-md border border-transparent bg-[#1A1F27] text-white focus:shadow-md focus:shadow-[#DD2C28] outline-none transition-all ease-in duration-400"
        />
        {urlError && youtubeUrl ? (
          <p className="text-red-500 text-md text-center mb-4">
            Invalid YouTube link. Please check the URL.
          </p>
        ) : thumbnailUrl ? (
          <iframe className="w-[85%] mx-auto aspect-video rounded-md mt-2 mb-4" src={thumbnailUrl} title="youtube_video"></iframe>
          /* <img
            src={thumbnailUrl}
            alt="YouTube Thumbnail"
            className="w-full h-auto rounded-md mb-4"
          /> */
        ) : null}

        {youtubeUrl && !urlError ? (
          user ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-4xl max-sm:text-[20px] max-sm:px-2 mt-16 mb-5 font-semibold text-white max-sm:py-1 py-2 bg-[#D88B0F] rounded-sm text-center">
                  Wants and Target Audience
                </h4>
                <div className="px-2">
                  <h5 className="font-medium mb-2 text-[22px] max-sm:text-[20px] text-[#D88B0F]">Duration:</h5>
                  <div className="flex flex-col space-y-2 mb-4 ml-2 text-gray-100 text-[18px] max-sm:text-[16px]">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="duration"
                        value="0 to 3"
                        checked={duration === "0 to 3"}
                        onChange={() => setDuration("0 to 3")}
                      />
                      <span>0 - 3 Minutes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="duration"
                        value="3 to 6"
                        checked={duration === "3 to 6"}
                        onChange={() => setDuration("3 to 6")}
                      />
                      <span>3 - 6 Minutes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="duration"
                        value="6 to 10"
                        checked={duration === "6 to 10"}
                        onChange={() => setDuration("6 to 10")}
                      />
                      <span>6 - 10 Minutes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="duration"
                        value="10 to 20"
                        checked={duration === "10 to 20"}
                        onChange={() => setDuration("10 to 20")}
                      />
                      <span>10 - 20+ Minutes</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <h5 className="font-medium mb-2 text-[22px] max-sm:text-[20px] text-[#D88B0F]">Target Country:</h5>
                <select
                  value={country}
                  onChange={handleLocationChange}
                  className="w-full p-4 max-sm:p-3 max-sm:pl-2 max-sm:text-[15px] mb-4 bg-[#1A1F27] text-white rounded-md outline-none focus:shadow-md focus:shadow-[#D88B0F] transition-all ease-in duration-400"
                >
                  <option value="">Select a country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="px-2">
                <h5 className="font-medium mb-2 text-[22px] max-sm:text-[20px] text-[#D88B0F]">Budget $:</h5>
                <div className="relative">
                  <span className="absolute mt-[17px] max-sm:mt-[11px] left-1 flex items-center max-sm:pl-[8px] pl-3 text-white">
                    $
                  </span>
                  <input
                    type="number"
                    value={budget}
                    min={0}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Enter Budget"
                    className="w-full  max-sm:p-3 max-sm:text-[15px] max-sm:pl-7 mb-3 pl-10 p-4 bg-[#1A1F27] text-white rounded-md outline-none focus:shadow-md focus:shadow-[#D88B0F] transition-all ease-in duration-400"
                  />
                </div>
              </div>
              <p className="font-medium px-2 mb-2 text-[22px] max-sm:text-[20px] text-[#D88B0F]">Estimated Views: <span className="text-zinc-300">{views}</span></p>
              <div className="w-full text-center">
                <button
                  type="submit"
                  className="w-[60%] max-sm:text-[14px] max-sm:font-medium max-sm:p-2 bg-gradient-to-b from-[rgb(71,142,255)] to-[rgb(48,109,209)]  hover:opacity-85 mx-auto font-semibold text-white p-3 rounded-md transition-colors"
                >
                  Proceed to Payment
                </button>
              </div>

            </form>
          ) : (
            <div className="text-center">
              <p>Please log in to proceed.</p>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};
export default CombinedForm;
