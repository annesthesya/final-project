import { collection, addDoc } from "@firebase/firestore";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { db } from "../firebase-config";
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

function Register() {
  const navigate = useNavigate();

  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const [registerName, setRegisterName] = useState<string>("");
  const [registerPhone, setRegisterPhone] = useState<string>("");

  const clientsCollectionRef = collection(db, "clients");

  const createClient = async () => {
    await addDoc(clientsCollectionRef, {
      name: registerName,
      email: registerEmail,
      phone: registerPhone,
      created: new Date(),
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
    createClient();
    navigate("/account");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          register();
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "10vh",
          }}
        >
          <Typography sx={{ fontSize: "24px", mb: "16px", color: "#FFFF00" }}>
            Welcome!
          </Typography>
          <FormControl sx={{ m: "8px", width: "225px" }} variant="outlined">
            <InputLabel sx={{ color: "#FFFF00" }} htmlFor="name-input">
              Name
            </InputLabel>
            <OutlinedInput
              id="name-input"
              sx={{ color: "#FFFF00" }}
              label="Name"
              onChange={(event) => {
                setRegisterName(event.target.value);
              }}
            />
          </FormControl>
          <FormControl sx={{ m: "8px", width: "225px" }} variant="outlined">
            <InputLabel sx={{ color: "#FFFF00" }} htmlFor="phone-input">
              Phone Number
            </InputLabel>
            <OutlinedInput
              id="phone-input"
              sx={{ color: "#FFFF00" }}
              label="Phone Number"
              onChange={(event) => {
                setRegisterPhone(event.target.value);
              }}
            />
          </FormControl>
          <FormControl sx={{ m: "8px", width: "225px" }} variant="outlined">
            <InputLabel sx={{ color: "#FFFF00" }} htmlFor="email-input">
              Email Address
            </InputLabel>
            <OutlinedInput
              id="email-input"
              sx={{ color: "#FFFF00" }}
              label="Email Address"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
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
                setRegisterPassword(event.target.value);
              }}
            />
          </FormControl>
          <CustomButton type="submit">Register</CustomButton>
        </Box>
      </form>
    </>
  );
}

export default Register;
