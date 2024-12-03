import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import COMESOLOGO from "../../../assets/COMESOLOGO.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // for default styling
import img from "../../../assets/Asset.png";
import img2 from "../../../assets/frame2.png";
import img3 from "../../../assets/frame3.png";
import "../../../styles/Signup.css";
// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiArrowBack, BiArrowFromRight, BiHide, BiShow } from "react-icons/bi";
import Spinner from "../../../Ul/Spinner";
import "../../../styles/overflow_hidden.css"
// Sample data for the auto slider
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

function Signup() {
  const navigate = useNavigate();

   // States for form inputs
   const [email, setEmail] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
   const [isLoading, setIsLoading] = useState(true);

   const handleLogin = () => {
     // Simulate authentication success
     
     navigate("/login"); // Redirect to the dashboard
   };
 
   // Handle password input to accept only numbers
   const handlePasswordChange = (e) => {
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


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
    return () => clearTimeout(timer);
  }, []);


  if (isLoading) {
    return (
      <div className="flex text-[#0A2EE2] items-center justify-center h-screen w-full">
        <Spinner />
        {/* <div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12"></div> */}
      </div>
    );
  }

  return (
    <div className="flex justify-between    relative overflow-hidden ">
     <div className="lg:w-0 w-[342px] h-[342px]   absolute top-[-133px] right-[-203px] rounded-full bg-[#DDDFE1]"></div>
      {/* Login Form */}

       {/* Login Form */}
       <div className="px-[50px] font-poppins py-[40px] flex flex-col w-full lg:w-1/2 scroll-container  lg:h-screen overflow-y-auto">
        <span className="flex items-center font-poppins text-[#333333] font-[500] md:text-[32px] leading-[48px]">
          Welcome Back
          <img src={COMESOLOGO} className="ml-2" alt="COME SO LOGO" />
        </span>
        <form className="space-y-4 mt-6">
          <div>
            <label className="block text-[#666666] text-sm font-medium">Company Name</label>
            <input
              type="text"
              className="w-full h-[56px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              // required
            />
          </div>
          <div>
            <label className="block text-[#666666] text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full h-[56px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              // required
            />
          </div>
          <div>
            <label className="block text-[#666666] text-sm font-medium">Phone Number</label>
            <PhoneInput
              className="w-full h-[56px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
              // value={phoneNumber}
              onChange={setPhoneNumber}
              defaultCountry="US"
              international
              required
            />
          </div>
          <div>
            <label className="block text-[#666666] text-sm font-medium">Company Location</label>
            <input
              type="text"
              className="w-full h-[56px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              // required
            />
          </div>
          <div className="relative">
            <label className="block text-[#666666] text-sm font-medium">
              Password (Numbers Only)
            </label>
            <input
              type={showPassword ? "text" : "password"} // Switch input type based on visibility
              className="w-full h-[56px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
              // value={password}
              onChange={handlePasswordChange}
              required
            />
            {/* Eye icon for toggling password visibility */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[15%] right-4 gap-1 font-poppins font-[400] leading-[27px]  flex transform -translate-y-[50%] cursor-pointer text-gray-600"
            >
              {showPassword ? <BiShow size={24} />  : <BiHide size={24} />}
              {showPassword ? "Show" : "Hide"}
            </span>
          </div>
        </form>
        <div className="  pt-[20%] flex flex-col pb-3 ">
          <span className=" font-[400] text-[16px] leading-[24px] text-[#666666]">
            By creating an account, you agree to the Terms of use and Privacy Policy.
          </span>

          <button
            onClick={handleLogin}
            className="mt-6 px-5 py-[10px] font-[500] leading-[33px] font-poppins w-[200px]  bg-[#0A2EE2]  text-white rounded-[30px]"
          >
            Sign Up
          </button>
          <span className=" font-[400] text-[16px] leading-[24px] py-1 text-[#666666]">Already have an ccount?
            <Link to="/login" className=" underline">
             Login
            </Link>
          </span>
        </div>

        <div className="lg:w-0 w-[342px] z-[-1] h-[342px] absolute bottom-[-133px] left-[-150px] rounded-full bg-[#DDDFE1]"></div>
      </div>

      {/* Image Slider */}
      <div className="w-0 lg:w-1/2 flex flex-col justify-center md:h-screen   relative overflow-hidden   ">
        <div className="w-[342px] h-[342px] absolute top-[-133px] right-[-203px] rounded-full bg-[#DDDFE1]"></div>
        <Slider {...settings}>
          {sliderData.map((data, index) => (
            <div key={index} className="text-center px-6  ">
              <h2 className="text-xl font-bold mb-2">{data.header}</h2>
              <img
                src={data.image}
                alt={`Slide ${index}`}
                className="w-full h-[300px] object-contain mb-4"
              />
              <h3 className="md:text-[20px] leading-[24px] font-[600] text-[#0A2EE2]">{data.semiHeader}</h3>
              <p className="text-[24px] pt-2 font-[600] leading-[38.4px] text-[#333333]">{data.paragraph}</p>
            </div>
          ))}
        </Slider>
        <div className="w-[342px] h-[342px] z-[-1] absolute bottom-[-133px] left-[-150px] rounded-full bg-[#DDDFE1]"></div>
      </div>
    </div>
  );
}

export default Signup;
