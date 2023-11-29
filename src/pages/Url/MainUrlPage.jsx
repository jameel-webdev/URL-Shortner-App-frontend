import { Container, Typography, Box, TextField, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateMutation } from "../../redux/slices/urlApiSlice.js";
import CircularProgress from "@mui/material/CircularProgress";

const MainUrlPage = () => {
  const navigate = useNavigate();
  const [createUrl, { isLoading }] = useCreateMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fullurl = data.get("link");
    try {
      if (fullurl) {
        const res = await createUrl({ fullurl }).unwrap();
        navigate("/shorturl");
        alert(res.message);
      }
    } catch (error) {
      alert(err?.data?.message || err.error);
    }
  };
  return (
    <>
      <Container component="main" maxWidth="md">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h3" color="steelblue">
            Zhart URL
          </Typography>
          <Typography variant="h6" color="steelblue">
            Paste the URL to be shortened
          </Typography>
          <TextField
            name="link"
            id="fullWidth"
            label="Enter the link here"
            fullWidth
            required
          />
          {isLoading && <CircularProgress color="success" />}
          <Button type="submit" variant="contained" size="large">
            Shorten URL
          </Button>
          <Typography variant="subtitle2">
            ShortURL is a free tool to shorten URLs and generate short links
          </Typography>
          <Typography variant="subtitle2">
            URL shortener allows to create a shortened link making it easy to
            share
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default MainUrlPage;
