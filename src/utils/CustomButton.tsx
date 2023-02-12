import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

interface CustomButtonProps extends ButtonProps {}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  type = "button",
  sx,
}) => {
  return (
    <Button
      variant="contained"
      type={type}
      sx={{
        background: "#3c3f53",
        color: "#FFFF00",
        m: "8px",
        mt: "16px",
        width: "200px",
        fontSize: "16px",
        border: "1px solid #FFFF00",
        "&:hover": { background: "#515571" },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
