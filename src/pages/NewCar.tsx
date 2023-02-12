import { collection, addDoc } from "@firebase/firestore";
import { useState } from "react";
import { auth } from "../firebase-config";
import { db } from "../firebase-config";
import CustomButton from "../utils/CustomButton";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

function NewCar() {
  const navigate = useNavigate();

  const [user, setUser] = useState<any>({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const email = user?.email;

  const [registerLicensePlate, setRegisterLicensePlate] = useState<string>("");
  const [registerManufacturer, setRegisterManufacturer] = useState<string>("");
  const [registerModel, setRegisterModel] = useState<string>("");
  const [registerColour, setRegisterColour] = useState<string>("");

  const carsCollectionRef = collection(db, "cars");

  const createCar = async () => {
    await addDoc(carsCollectionRef, {
      user: email,
      model: registerModel,
      licensePlate: registerLicensePlate,
      colour: registerColour,
      manufacturer: registerManufacturer,
    });
    navigate("/cars");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createCar();
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "24px", mb: "8px", color: "#FFFF00" }}>
            Register your new car!
          </Typography>
          <FormControl sx={{ m: "8px", width: "225px" }} variant="outlined">
            <InputLabel sx={{ color: "#FFFF00" }} htmlFor="manufacturer-input">
              Manufacturer
            </InputLabel>
            <OutlinedInput
              id="manufacturer-input"
              sx={{ color: "#FFFF00" }}
              label="Manufacturer"
              onChange={(event) => {
                setRegisterManufacturer(event.target.value);
              }}
            />
          </FormControl>
          <FormControl sx={{ m: "8px", width: "225px" }} variant="outlined">
            <InputLabel sx={{ color: "#FFFF00" }} htmlFor="model-input">
              Model
            </InputLabel>
            <OutlinedInput
              id="model-input"
              sx={{ color: "#FFFF00" }}
              label="Model"
              onChange={(event) => {
                setRegisterModel(event.target.value);
              }}
            />
          </FormControl>
          <FormControl sx={{ m: "8px", width: "225px" }} variant="outlined">
            <InputLabel sx={{ color: "#FFFF00" }} htmlFor="colour-input">
              Colour
            </InputLabel>
            <OutlinedInput
              id="colour-input"
              sx={{ color: "#FFFF00" }}
              label="Colour"
              onChange={(event) => {
                setRegisterColour(event.target.value);
              }}
            />
          </FormControl>
          <FormControl sx={{ m: "8px", width: "225px" }} variant="outlined">
            <InputLabel sx={{ color: "#FFFF00" }} htmlFor="license-plate-input">
              License Plate
            </InputLabel>
            <OutlinedInput
              id="license-plate-input"
              sx={{ color: "#FFFF00" }}
              label="License Plate"
              onChange={(event) => {
                setRegisterLicensePlate(event.target.value);
              }}
            />
          </FormControl>
          <CustomButton type="submit">Add Car</CustomButton>
        </Box>
      </form>
    </>
  );
}

export default NewCar;
