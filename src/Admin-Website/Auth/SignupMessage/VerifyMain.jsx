import { useState, useEffect, useRef, useContext } from 'react';
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import { CheckCircle, Error } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';
// import {toast} from 'react-toastify'

const VerifyMain = ({email}) => {
  const [otp, setOtp] = useState(Array(4).fill(''));
  const [otpLength, setOtpLength] = useState(4); // Default OTP length
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [timer, setTimer] = useState(119); // Set timer to 1 minute 59 seconds
  const inputRefs = useRef([]);
  const [otpVerified, setOtpVerified] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();
  const {userDetails} = useContext(AuthContext);

  useEffect(() => {
    fetchOtpLengthFromApi();
    startCountdown();

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const fetchOtpLengthFromApi = async () => {
    const responseOtpLength = 4; // Replace with actual API response length
    setOtpLength(responseOtpLength);
    setOtp(Array(responseOtpLength).fill(''));
  };

  const startCountdown = () => {
    clearInterval(timerRef.current);
    setTimer(119);

    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const handleChange = (value, index) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (index === otpLength - 1) {
      handleSignIn(newOtp);
    }
  };

  const validateOtp = (otp) => otp.every((digit) => digit !== '');

  const handleSignIn = async (otp) => {
    if (!validateOtp(otp)) {
      setError('Please enter a valid OTP');
      return;
    }

    setIsLoading(true);
    const enteredOtp = otp.join(''); // Combine the OTP digits into a single string

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/validate-password-otp`, {
        otp_code: enteredOtp,
        email, // Replace with the actual email
      });

      setIsLoading(false);
      setSuccessMessage(response.data.message || 'Verification successful.');
      setError('');
      setOtpVerified(true);

      

      // Redirect to the success page or dashboard
      navigate('/change-password', {state:email});
    } catch (error) {
      console.log(error)
      setIsLoading(false);
      setError(error.response?.data?.message || 'Invalid Code');
      setSuccessMessage('');
      setOtpVerified(false);
    }
  };

  const handleResendCode = async () => {
    try {
      // Call your resend OTP API
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/resend-otp`, {
        email, otp_code: enteredOtp // Replace with the actual email
      });

      startCountdown();
      setOtp(Array(otpLength).fill(''));
      setError('');
      setSuccessMessage('A new OTP has been sent to your email.');
      setOtpVerified(false);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to resend OTP');
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box sx={{ p: 1 }} px="20px">
      <Grid container spacing={2} justifyContent="center">
        {otp.map((value, index) => (
          <Grid item key={index}>
            <TextField
              inputRef={(ref) => (inputRefs.current[index] = ref)}
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              variant="outlined"
              inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
              sx={{ width: 50, height: 50 }}
              error={!!error}
              color={otpVerified ? 'success' : 'primary'}
            />
          </Grid>
        ))}
      </Grid>

      {error && !successMessage && (
        <Box display="flex" alignItems="center" mt={2}>
          <Error fontSize="small" color="error" />
          <Typography color="error" ml={1} fontSize="13px">
            {error}
          </Typography>
        </Box>
      )}

      {successMessage && !error && (
        <Box display="flex" alignItems="center" mt={2}>
          <CheckCircle color="success" />
          <Typography color="success.main" ml={1}>
            {successMessage}
          </Typography>
        </Box>
      )}

      {isLoading && <CircularProgress sx={{ mt: 2 }} />}

      <Typography mt={2}>
        {timer > 0 ? (
          <>Get a new code in {formatTime()}</>
        ) : (
          <Button onClick={handleResendCode} color="primary">
            Get a new code
          </Button>
        )}
      </Typography>
    </Box>
  );
};

export default VerifyMain;
