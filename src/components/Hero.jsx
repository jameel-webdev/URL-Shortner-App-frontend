import { Card, Container, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography variant="h3" sx={{ marginTop: 2 }}>
        MERN - - URL Shortner App
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        An URL shortener is a website that reduces the length of your URL
        (Uniform Resource Locator). The idea is to minimize the web page address
        into something that's easier to remember and track.
      </Typography>
      <Typography variant="subtitle1">
        <strong>Frontend :</strong> Vite-React , React-router-dom ,
        React-redux-toolkit , MaterialUI
      </Typography>
      <Typography variant="subtitle1">
        <strong>Backend :</strong> Express , MongoDb(mongoose) , dotenv ,
        jsonwebtoken , bcryptjs , nodemailer , cookie-parser
      </Typography>
      <Typography
        variant="caption"
        display="block"
        sx={{ marginBottom: 3, textAlign: "center" }}
      >
        You are viewing this page either your are not registerd or your account
        is still not activated. Kindly make registration or activate your
        account by click the link inside the mail received during the
        registration
      </Typography>
    </Container>
  );
};

export default Hero;
