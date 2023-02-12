import { Typography, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../utils/CustomButton";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Car } from "../types/Car";

const Cars = () => {
  const [user, setUser] = useState<User | null>(null);
  const [cars, setCars] = useState<Car[]>([]);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const email = user?.email;

  useEffect(() => {
    (async () => {
      if (user?.email) {
        const q = query(collection(db, "cars"), where("user", "==", email));
        const querySnapshot = (await getDocs(q)) as any;
        setCars(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }
    })();
  }, [user?.email]);

  return (
    <>
      <Typography
        sx={{
          color: "#FFFF00",
          textAlign: "center",
          marginBottom: "16px",
          fontSize: "20px",
        }}
        variant="body1"
        gutterBottom
      >
        Here are all the cars you've parked with us!
      </Typography>
      {cars.map((car) => (
        <Card
          sx={{
            minWidth: "275px",
            backgroundColor: "#515571",
            m: "8px",
            border: "1px solid #FFFF00",
          }}
          key={car.id}
        >
          <CardContent>
            <Typography variant="h5" component="div" sx={{ m: "8px" }}>
              {car.manufacturer} {car.model}
            </Typography>
            <Typography sx={{ m: "8px" }} color="text.secondary">
              {car.colour}
            </Typography>
            <Typography variant="body2" sx={{ m: "8px" }}>
              {car.licensePlate}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <CustomButton>
        <Link style={{ color: "#FFFF00" }} to="/new-car">
          Add a Car
        </Link>
      </CustomButton>
    </>
  );
};

export default Cars;
