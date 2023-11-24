import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Link,
  Grid,
  Divider,
} from "@mui/material";
import React from "react";

const ShortUrlPage = () => {
  const handleCopy = (event) => {
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
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 2,
          }}
        >
          <Typography variant="h3" color="steelblue">
            ZhartY URL
          </Typography>
          <Typography variant="h6" color="steelblue">
            Your shortened URL
          </Typography>
          <Typography variant="subtitle2">
            Copy the shortened link and share it in messages, texts, posts,
            websites and other locations.
          </Typography>
          <Divider />
          <Box component="form" onSubmit={handleCopy} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8} sm={8}>
                <TextField
                  name="link"
                  id="fullWidth"
                  label="Your shortened Url"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={4} sm={4}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ paddingTop: 2, paddingBottom: 1.5 }}
                >
                  Copy
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="subtitle2">Long Given URL :</Typography>
            <Button variant="outlined">Total clicks of your short url</Button>
            <Link href="/url">
              <Button variant="outlined">Shorten another URL</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ShortUrlPage;
