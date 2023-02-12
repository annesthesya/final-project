import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../utils/CustomButton";

const NoPage = () => {
  return (
    <>
      <Typography
        sx={{
          color: "#FFFF00",
          textAlign: "center",
          mb: "16px",
          fontSize: "32px",
          paddingTop: "15vh",
        }}
        variant="body1"
        gutterBottom
      >
        Whoops!
      </Typography>
      <Typography
        sx={{
          color: "#FFFF00",
          textAlign: "center",
          mb: "16px",
          fontSize: "24px",
        }}
        variant="body1"
        gutterBottom
      >
        The page you're looking for doesn't exist or you don't have access to it
        right now.
      </Typography>
      <CustomButton>
        <Link style={{ color: "#FFFF00" }} to="/">
          Back to Home
        </Link>
      </CustomButton>
    </>
  );
};

export default NoPage;
