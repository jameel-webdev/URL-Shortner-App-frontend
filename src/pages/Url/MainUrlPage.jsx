import { Container, Typography, Box, TextField, Button } from "@mui/material";
import React from "react";

const MainUrlPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      link: data.get("link"),
    });
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
            ZhartY URL
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
