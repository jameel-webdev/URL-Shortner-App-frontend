import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              color="success"
            >
              <Link href="/" underline="none" color="gray">
                ZhartY
              </Link>
            </Typography>
            <Link href="/login">
              <Button color="inherit">
                SignIn
                <LoginIcon />
              </Button>
            </Link>
            <Link href="/register">
              <Button color="inherit">
                SignUp
                <ExitToAppIcon />
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
