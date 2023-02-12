import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CustomButton from "../utils/CustomButton";

const Authenticate = () => {
  return (
    <>
      <Typography
        sx={{
          color: "#FFFF00",
          textAlign: "center",
          paddingTop: "10vh",
          mb: "24px",
          fontSize: "20px",
        }}
        variant="body1"
        gutterBottom
      >
        Welcome to the world of hassle-free parking with WalkInThePark! Are you
        a new user ready to join our community of seamless parking experiences,
        or are you a returning user ready to pick up where you left off? Simply
        choose between registering for a new account or logging in to your
        existing one, and let us take care of the rest.
      </Typography>
      <CustomButton type={undefined}>
        <Link style={{ color: "#FFFF00" }} to="/login">
          Login
        </Link>
      </CustomButton>
      <CustomButton type={undefined}>
        <Link style={{ color: "#FFFF00" }} to="/register">
          Register
        </Link>
      </CustomButton>
    </>
  );
};

export default Authenticate;
