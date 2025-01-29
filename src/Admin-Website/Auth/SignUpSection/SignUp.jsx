import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import COMESOLOGO from "../../../assets/COMESOLOGO.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // for default styling
import img from "../../../assets/Asset.png";
import img2 from "../../../assets/frame2.png";
import img3 from "../../../assets/frame3.png";
import { toast } from "react-toastify";
import "../../../styles/Admin/Signup.css";
// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiArrowBack, BiArrowFromRight, BiHide, BiShow } from "react-icons/bi";
import Spinner from "../../../Ul/Admin/Spinner";
import "../../../styles/Admin/overflow_hidden.css";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
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
  const {setUserDetails} = useContext(AuthContext)

  // States for form inputs
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [showPin, setShowPin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [dataPin, setDataPin] = useState('')
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (
      !companyLocation ||
      !companyName ||
      !phoneNumber ||
      !password ||
      !email|| !dataPin
    ) {
      return setError("All fields are required!");
    }
    try {
      setError(false);
      setButtonSpinner(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/sign-up`,
        {
         name:companyName,
         companyName,
         companyLocation,
         phone:phoneNumber,
         password,
         email,
         data_restriction_pin:dataPin
        }
      );
      
      
        
        // localStorage.setItem('ACCESS_TOKEN', res.data.token);
         
        setUserDetails({
          ...res.data.user
        });
         await axios.post(`${import.meta.env.VITE_BASE_URL}/api/send-otp`,{email});
         toast.success("Registration Successful!");
         setButtonSpinner(false);
        navigate("/OTPSignUp");
        
       
        
        
    
     
    } catch (error) {
      setButtonSpinner(false);

      if(error?.response?.data){
        setError(error.response?.data.message)
      }else{
        console.log(error);
        setError('Some network error occured, try again')
      }
    }
   
  };

  // Handle password input to accept only numbers
  const handlePasswordChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    setPassword(value);
  };
  const handleDataPinChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    setDataPin(value);
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
      <div className="lg:w-0 w-[342px] h-[342px]   absolute top-[-133px] right-[-203px] rounded-full bg-[#DDDFE1] z-[-100]"></div>
      {/* Login Form */}

      {/* Login Form */}
      <div className="px-[20px] md:px-[50px] font-poppins py-[40px] flex flex-col w-full lg:w-1/2 scroll-container  lg:h-screen overflow-y-auto">
        <div className="flex flex-col-reverse md:flex-row items-center ">
          <h2 className="font-poppins text-[#333333] font-[500] text-[12px] md:text-[32px] md:leading-[48px]">Welcome To</h2>
          <img src={COMESOLOGO} className="md:ml-2" alt="COME SO LOGO" />
        </div>
        <p className="text-gray-400 my-3">For the registration of the KYC please have the following documents that are necessary for the registration;Business Plan (Pricelist, Number of patients), Bank regisration information and Business logo</p>
        <form className="space-y-4 mt-6">
          <div>
            <label className="block text-[#666666] text-[12px] md:text-[16px] font-medium">
              Company Name
            </label>
            <input
              type="text"
              className="w-full h-[56px] text-[12px] md:text-[16px] rounded-[12px]  p-2 border border[#f2f2f2] mt-2"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-[#666666] text-[12px] md:text-[16px] font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full h-[56px] text-[12px] md:text-[16px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-[#666666] text-[12px] md:text-[16px] font-medium">
              Phone Number (starting with country code e.g. +233)
            </label>
            <PhoneInput
              className="w-full h-[56px] text-[12px] md:text-[16px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
              // value={phoneNumber}
              onChange={setPhoneNumber}
              defaultCountry="GH"
              international
              
              required
            />
          </div>
          <div>
            <label className="block text-[#666666] text-[12px] md:text-[16px] font-medium">
              Company Location
            </label>
            <input
              type="text"
              className="w-full h-[56px] text-[12px] md:text-[16px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
              value={companyLocation}
              onChange={(e) => setCompanyLocation(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <label className="block text-[#666666] text-[12px]  md:text-[16px] font-medium">
              Password (Numbers Only)
            </label>
            <input
              type={showPassword ? "text" : "password"} // Switch input type based on visibility
              className="w-full h-[56px] text-[12px] md:text-[16px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {/* Eye icon for toggling password visibility */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[15%] right-4 gap-1 text-[12px] md:text-[16px] font-poppins font-[400] items-center   flex transform -translate-y-[50%] cursor-pointer text-gray-600"
            >
              {showPassword ? <BiShow  className="text-[12px] md:text-[16px]" /> : <BiHide className="text-[12px] md:text-[16px]" />}
              {showPassword ? "Show" : "Hide"}
            </span>
          </div>
          <div className="relative">
            <label className="block text-[#666666] text-[12px]  md:text-[16px] font-medium">
              Data Restriction pin (Numbers Only)
            </label>
            <input
              type={showPin ? "text" : "password"} // Switch input type based on visibility
              className="w-full h-[56px] text-[12px] md:text-[16px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
              value={dataPin}
              onChange={handleDataPinChange}
              required
            />
            {/* Eye icon for toggling password visibility */}
            <span
              onClick={() => setShowPin(!showPin)}
              className="absolute top-[15%] right-4 gap-1 text-[12px] md:text-[16px] font-poppins font-[400] items-center   flex transform -translate-y-[50%] cursor-pointer text-gray-600"
            >
              {showPin ? <BiShow  className="text-[12px] md:text-[16px]" /> : <BiHide className="text-[12px] md:text-[16px]" />}
              {showPin ? "Show" : "Hide"}
            </span>
          </div>
          {error && <p className="text-red-400 font-bold my-3 text-[12px] md:text-[16px]">{error}</p>}
        </form>
        <div className="  pt-[20%] flex flex-col pb-3 ">
          <span className=" font-[400] text-[12px] md:text-[16px]  md:leading-[24px] text-[#666666]">
            By creating an account, you agree to the Terms of use and Privacy
            Policy.
          </span>

          <button
            onClick={handleSignup}
            className="mt-6  md:px-5 py-[7px] md:py-[10px] font-[500] md:leading-[33px] font-poppins  md:w-[200px]  bg-[#0A2EE2]  text-white rounded-[30px]"
          >
            {buttonSpinner ? (
                <div className="flex text-white items-center justify-center h-full w-full">
                  <Spinner />
                  {/* <div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12"></div> */}
                </div>
              ) : (
                "Signup"
              )}
          </button>
          <span className=" font-[400] text-[12px] md:text-[16px] leading-[24px] py-1 text-[#666666]">
            Already have an ccount?
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
        <div className="w-[342px] h-[342px] z-[-1] absolute bottom-[-133px] left-[-150px] rounded-full bg-[#DDDFE1]"></div>
      </div>
    </div>
  );
}

export default Signup;
