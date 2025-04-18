import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Slider from "react-slick";
import { BiArrowBack, BiArrowFromRight, BiHide, BiShow } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import img from "../assets/Asset.png";
import img2 from "../assets/frame2.png";
import img3 from "../assets/frame3.png";
import axios from "axios";
import Spinner from "../Ul/Admin/Spinner";

// Sample slider data
const sliderData = [
  {
    header: "Business Account",
    semiHeader: "Easy Payments",
    paragraph: "Enjoy seamless payment processes.",
    image: img,
  },
  {
    header: "Track Your Payments",
    semiHeader: "Effortless Transactions",
    paragraph: "Track all payment requests made by sender accounts.",
    image: img2,
  },
  {
    header: "Guaranteed Experience",
    semiHeader: "Easy & Secure",
    paragraph: "We guarantee the best experience on our platform.",
    image: img3,
  },
];

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 
  const [loading, setLoading] = useState(false)
  const location = useLocation();
  const navigate = useNavigate()
  const handleResetPassword = async () => {
    
    const email = location.state;
    
    
    if (!password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    try {
      setLoading(true)
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/user/change-password`,
      { email, password: confirmPassword }
    );
    if (response.data.status) {
      setLoading(false);
      toast.success('Password Changed Successfully')

      
      

      setTimeout(() => {
        navigate('/login')
      }, 2000);
    }
  } catch (error) {
      setLoading(false);
    console.log(error);
    toast.error('Some error occured in the server try again later')
    
  }

    
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    prevArrow: (
      <button className="slick-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-transparent text-black p-2 rounded-full shadow-md">
        <BiArrowBack className="text-2xl" />
      </button>
    ),
    nextArrow: (
      <button className="slick-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-transparent text-black p-2 rounded-full shadow-md">
        <BiArrowFromRight className="text-2xl" />
      </button>
    ),
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    setPassword(value);
  };

  return (
    <div className="flex justify-between h-screen relative overflow-hidden">
      {/* Reset Password Form */}
      <div className="px-[20px] md:px-[50px] font-poppins py-[40px] flex flex-col w-full lg:w-1/2">
        <h1 className="text-2xl font-bold mb-4">Reset Your Password</h1>
        <p className="text-gray-600 mb-6">
          Enter and confirm your new password to reset your account.
        </p>
        <div className="space-y-4">
          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password (numbers only)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              className="absolute top-2 right-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiHide size={20} /> : <BiShow size={20} />}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-2 right-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiHide size={20} /> : <BiShow size={20} />}
            </button>
          </div>

          {/* Reset Password Button */}
          <button
            onClick={handleResetPassword}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            {loading ? (
              <div className="flex text-white items-center justify-center w-full h-full">
                <Spinner />
                {/* <div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12"></div> */}
              </div>
            ) : (
              "Reset Password"
            )}
          </button>
        </div>
      </div>

      {/* Image Slider */}
      <div className="w-0 lg:w-1/2 flex flex-col justify-center h-full relative overflow-hidden">
        <Slider {...settings}>
          {sliderData.map((data, index) => (
            <div key={index} className="text-center px-6">
              <h2 className="text-xl font-bold mb-2">{data.header}</h2>
              <img
                src={data.image}
                alt={`Slide ${index}`}
                className="w-full h-[300px] object-contain mb-4"
              />
              <h3 className="md:text-[20px] leading-[24px] font-[600] text-[#0A2EE2]">
                {data.semiHeader}
              </h3>
              <p className="text-[24px] pt-2 font-[600] leading-[38.4px] text-[#333333]">
                {data.paragraph}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ResetPassword;
