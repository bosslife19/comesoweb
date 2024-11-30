import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import COMESOLOGO from "../../../assets/COMESOLOGO.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // for default styling
import img from "../../../assets/Asset.png";
import img2 from "../../../assets/frame2.png";
import img3 from "../../../assets/frame3.png";
import "../../../styles/Signup.css"
// Imimpoport slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiArrowBack, BiArrowFromRight } from "react-icons/bi";
 
// Sample image URLs for the auto slider
const images = [img, img2, img3];
const date =()=>[
    {
        header:"Business Account",
        semiHeader:"Easy Payments",
        paragraph:"Enjoy seamless payment processes."
    },
    {
        header:"Business Account",
        semiHeader:"Easy Payments",
        paragraph:"We guarantee the best experience on our platform."
    },
    {
        header:"Track your Payments",
        semiHeader:"Easy Payments",
        paragraph:"Track all Payment request made by senders account."
    },
]
function Login() {
  const navigate = useNavigate();

  // States for form inputs
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simulate authentication success
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard"); // Redirect to the dashboard
  };

  // Handle password input to accept only numbers
  const handlePasswordChange = (e) => {
    // Ensure only numbers are entered
    const value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    setPassword(value);
  };

  // Slick settings for the slider
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds for auto-slide
    dots: true, // Show dots
    arrows: true, // Show left and right arrows
    prevArrow: (
      <button className="slick-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-transparent text-white p-2 rounded-full shadow-md">
        <BiArrowBack className="text-2xl" />
      </button>
    ), // Custom left arrow
    nextArrow: (
      <button className="slick-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-transparent text-white p-2 rounded-full shadow-md">
        <BiArrowFromRight className="text-2xl" />
      </button>
    ), // Custom right arrow
  };

  return (
    <div className="flex justify-between">
      <div className="px-[50px] py-[40px] w-1/2 ">
        <span className="flex items-center font-poppins text-[#333333] font-[500] md:text-[32px] leading-[48px]">
          Welcome to
          <img src={COMESOLOGO} className="ml-2" alt="COME SO LOGO" />
        </span>
        <form className="space-y-4 mt-6">
          {/* Email input */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Phone Number input */}
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <PhoneInput
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={phoneNumber}
              onChange={setPhoneNumber}
              defaultCountry="US"
              international
              required
            />
          </div>

          {/* Password input */}
          <div>
            <label className="block text-sm font-medium">Password (Numbers Only)</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
        </form>

        <button
          onClick={handleLogin}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Login
        </button>
      </div>

      {/* Auto Image Slider */}
      <div className="w-1/2 h-screen relative overflow-hidden bg-transparent text-[#000] border-none">
       <div className="w-[500px] h-full absolute top-[-50%] right-[-40%] rounded-full bg-[#DDDFE1]"></div>
       {/* <img src={}  /> */}
       <div className=""> 
        <h2>Business Account</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slider ${index}`}
                className="w-full h-[300px] object-contain"
                style={{ outline: "none", border: "none" }} // Ensuring no outline or border on click
              />
            </div>
          ))}
        </Slider>
        <span></span>
        </div>
        <div className="w-[500px] h-full absolute bottom-[-50%] left-[-40%] rounded-full bg-[#DDDFE1]"></div>
        </div>
    </div>
  );
}

export default Login;
