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
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRedirectQuery } from "../../redux/slices/urlApiSlice.js";

const ShortUrlPage = () => {
  const { urlInfo } = useSelector((state) => state.url);
  const [isButtonClicked, setButtonCLicked] = useState(false);
  const [shortUrlId, setShortUrlId] = useState("");
  const { data: longUrl, isLoading } = useRedirectQuery(shortUrlId);
  const handleClick = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const shorty = data.get("link");
    const shortid = shorty.split("/")[3];
    setShortUrlId(shortid);
  };
  useEffect(() => {
    if (!isLoading && isButtonClicked) {
      window.location.href = longUrl;
    }
  }, [longUrl]);
  console.log(longUrl);
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
          <Box component="form" onClick={handleClick} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8} sm={8} sx={{ width: 400 }}>
                <TextField
                  name="link"
                  id="fullWidth"
                  label="Your shortened Url"
                  value={`https://zharty.onrender.com/${urlInfo.shorty}`}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={4} sm={4}>
                <Button
                  type="submit"
                  // onClick={handleClick}
                  variant="contained"
                  size="large"
                  sx={{ paddingTop: 2, paddingBottom: 1.5 }}
                >
                  Go to Link
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="subtitle2">Long Given URL :</Typography>
            <Box>
              <Button variant="outlined" sx={{ marginRight: 2 }}>
                Total clicks of your short url
              </Button>
              {urlInfo.clicks}
            </Box>
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
