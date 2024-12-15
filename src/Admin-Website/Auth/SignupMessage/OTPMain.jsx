import   { useState, useEffect, useRef } from 'react';
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
import EmailLoading from '../../welcomLoading/emailLoading';
 
const OTPMain =()=> {
  const [otp, setOtp] = useState(Array(4).fill(''));
  const [otpLength, setOtpLength] = useState(4); // Default OTP length
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [timer, setTimer] = useState(119); // Set timer to 1 minute 59 seconds
  const inputRefs = useRef([]);
  const [otpVerified, setOtpVerified] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    fetchOtpLengthFromApi();
    startCountdown();

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const timerRef = useRef(null);

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

  const handleSignIn = (otp) => {
    if (!validateOtp(otp)) {
      setError('Please enter a valid OTP');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const enteredOtp = otp.join('');
      if (enteredOtp === '1234') {
        setSuccessMessage('Phone number verification successful.');
        setError('');
        setOtpVerified(true);
        router("/SucessEmail");
      } else {
        setError('Invalid Code');
        setSuccessMessage('');
        setOtpVerified(false);
      }
    }, 3000);
  };

   const router = useNavigate()
      // const handlechange =()=>{
      //     router("/admin/teamUser")
      // }

  const handleResendCode = () => {
    startCountdown();
    setOtp(Array(otpLength).fill(''));
    setError('');
    setSuccessMessage('');
    setOtpVerified(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  const navigate = useNavigate()
  const handlechange = () =>{
    navigate("")
  }
  return (
    <Box sx={{ p: 1 }} px={"20px"}>
      
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
              // helperText={error && index === 0 ? error : ''}
              color={otpVerified ? 'success' : 'primary'}
            />
          </Grid>
        ))}
      </Grid>

      {error && !successMessage && (
        <Box display="flex" alignItems="center" mt={2}>
          <Error fontSize={"13px"} color="error" />
          <Typography color="error" ml={1} fontSize={"13px"}>{error}</Typography>
        </Box>
      )}

      {successMessage && !error && (
        <Box display="flex" alignItems="center" mt={2}>
          <CheckCircle color="success" />
          <Typography color="success.main" ml={1}>{successMessage}</Typography>
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
}

export default OTPMain;
