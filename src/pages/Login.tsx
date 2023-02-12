import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useState } from "react";
import CustomButton from "../utils/CustomButton";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Box,
  Typography,
} from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate("/account");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "17vh",
          }}
        >
          <Typography sx={{ fontSize: "24px", mb: "16px", color: "#FFFF00" }}>
            Welcome back!
          </Typography>
          <FormControl sx={{ m: "8px", width: "225px" }} variant="outlined">
            <InputLabel sx={{ color: "#FFFF00" }} htmlFor="email-input">
              Email Address
            </InputLabel>
            <OutlinedInput
              sx={{ color: "#FFFF00" }}
              id="email-input"
              label="Email Address"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
          </FormControl>
          <FormControl
            sx={{
              m: "8px",
              width: "225px",
            }}
            variant="outlined"
          >
            <InputLabel sx={{ color: "#FFFF00" }} htmlFor="pass-input">
              Password
            </InputLabel>
            <OutlinedInput
              id="pass-input"
              sx={{ color: "#FFFF00" }}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
          </FormControl>
          <CustomButton type="submit">Login</CustomButton>
        </Box>
      </form>
    </>
  );
};

export default Login;
