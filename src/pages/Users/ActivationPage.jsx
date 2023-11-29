import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useActivateMutation } from "../../redux/slices/userApiSlice";
import { removeUserInfo, setUserInfo } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function ActivationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activation, { isLoading }] = useActivateMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const activeToken = data.get("code");
    if (activation) {
      try {
        const res = await activation({ activeToken }).unwrap();
        dispatch(setUserInfo({ ...res }));
        if (res.isActive) {
          navigate("/url");
        }
        alert(res.message);
      } catch (err) {
        alert(err?.data?.message || err.error);
      }
    }
  };
  useEffect(() => {
    if (userInfo.isActive) {
      dispatch(removeUserInfo());
      navigate("/login");
    }
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <VpnKeyIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Account Activation
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <p>
            Activation code has been sent to your registered email. Kindly enter
            the activation code to activate your account.
          </p>
          <TextField
            required
            fullWidth
            id="code"
            label="Enter Your Activation Code"
            name="code"
          />
          {isLoading && <CircularProgress color="success" />}

          <Link href="/url">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
