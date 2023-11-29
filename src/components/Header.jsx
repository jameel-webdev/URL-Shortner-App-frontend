import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
// import LockOpenIcon from "@mui/icons-material/LockOpen";
import Button from "@mui/material/Button";
import { Alert, Link, Menu, MenuItem } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUserInfo } from "../redux/slices/authSlice";
import { useLogoutMutation } from "../redux/slices/userApiSlice";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [logout, { isLoading }] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(removeUserInfo());
      navigate("/");
    } catch (err) {
      <Alert severity="error">{err?.data?.message || err.error}</Alert>;
    }
  };
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
            {isLoading && <CircularProgress color="success" />}

            {userInfo ? (
              <>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  size="large"
                >
                  <Typography variant="h6">{userInfo.name}</Typography>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                  <MenuItem onClick={handleClose}>My Profile</MenuItem>
                  <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
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
                {/* <Link href="/activate">
                  <Button color="inherit">
                    Activate
                    <LockOpenIcon />
                  </Button>
                </Link> */}
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
