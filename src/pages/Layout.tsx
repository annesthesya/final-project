import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import {
  List,
  Container,
  ListItem,
  ListItemText,
  Drawer,
  Box,
} from "@mui/material";
import "../style/Layout.css";

const Layout = () => {
  const [user, setUser] = useState<any>({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // const classes = useStyles();
  const email = user?.email; // Replace this with the actual email of the logged in user

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Authenticate", link: "/auth" },
    {
      text: email || "Not logged in",
      link: email ? "/account" : null,
    },
    { text: "Cars", link: "/cars" },
    { text: "Reservations", link: "/reservations" },
    { text: "Logout", link: "/logout" },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            backgroundColor: "#474a62",
            width: "200px",
            borderRight: "1px solid #FFFF00",
          },
          className: "sidebar",
        }}
      >
        <div>
          <List>
            {menuItems.map((item, index) =>
              item.link ? (
                <ListItem
                  key={item.text}
                  component={Link}
                  to={item.link}
                  sx={{
                    color: "#FFFF00",
                  }}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      sx: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      },
                    }}
                    primary={item.text}
                  />
                </ListItem>
              ) : (
                <ListItem key={item.text}>
                  <ListItemText primary={item.text} />
                </ListItem>
              )
            )}
          </List>
        </div>
      </Drawer>
      <Box
        component="main"
        className="background"
        sx={{
          flexGrow: "1",
          height: "100vh",
          overflow: "auto",
          paddingLeft: "200px",
          paddingTop: "15vh",
          paddingBottom: "15vh",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
