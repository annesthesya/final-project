import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CustomButton from "../utils/CustomButton";

const Account = () => {
  return (
    <>
      <Typography
        sx={{
          color: "#FFFF00",
          textAlign: "center",
          fontSize: "20px",
          mb: "24px",
          paddingTop: "15vh",
        }}
        variant="body1"
        gutterBottom
      >
        Every day using WalkInThePark is a great day! What can we do for you?
      </Typography>
      <CustomButton>
        <Link style={{ color: "#FFFF00" }} to="/cars">
          View My Cars
        </Link>
      </CustomButton>
      <CustomButton>
        <Link style={{ color: "#FFFF00" }} to="/reservations">
          View My Reservations
        </Link>
      </CustomButton>
    </>
  );
};

export default Account;
