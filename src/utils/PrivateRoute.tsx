import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase-config";


const PrivateRoute = () => {

    const [user, setUser] = useState<any>({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
  
    // const email = user?.email;
    // console.log(email);

    return(
        user ? <Outlet/> : <Navigate to = "/notfound"/>
    );

};

export default PrivateRoute;