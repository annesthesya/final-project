import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OldRegister from "./pages/OldRegister";
import Register from "./pages/Register";
import Layout from "./pages/Layout";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import reportWebVitals from "./reportWebVitals";
import PrivateRoute from "./utils/PrivateRoute";
import Reservations from "./pages/Reservations";
import Cars from "./pages/Cars";
import Account from "./pages/Account";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Authenticate from "./pages/Authenticate";
import NewCar from "./pages/NewCar";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* https://mui.com/material-ui/react-css-baseline/ */}
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="auth" element={<Authenticate />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="old-register" element={<OldRegister />} />
            <Route path="logout" element={<Logout />} />
            <Route element={<PrivateRoute />}>
              <Route path="account" element={<Account />} />
              <Route path="cars" element={<Cars />} />
              <Route path="new-car" element={<NewCar />} />
              <Route path="reservations" element={<Reservations />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
