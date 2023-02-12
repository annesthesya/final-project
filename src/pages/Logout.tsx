import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { Typography } from "@mui/material";
import CustomButton from "../utils/CustomButton";
import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    const logout = async () => {
      await signOut(auth);
    };
    logout();
  }, []);

  return (
    <>
      <Typography
        sx={{
          color: "#FFFF00",
          textAlign: "center",
          mb: "16px",
          fontSize: "24px",
          paddingTop: "17vh",
        }}
        variant="body1"
        gutterBottom
      >
        You have been logged out. See you next time!
      </Typography>
      <CustomButton>
        <Link style={{ color: "#FFFF00" }} to="/">
          Back to Home
        </Link>
      </CustomButton>
    </>
  );
};

export default Logout;
