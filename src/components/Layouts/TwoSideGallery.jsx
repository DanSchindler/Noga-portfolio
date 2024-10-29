import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const TwoSideGallery = () => {
  return (
    <Box
      sx={{
        padding: 0,
        width: { xs: "100%", md: "100%" },
        marginTop: "40px",
      }}
    >
      {/* First Row */}
      <Grid container spacing={0}>
        <Grid item xs={12} md={5}>
          <Typography
            fontSize={{ xs: "18px", lg: "22px" }}
            fontWeight={2000}
            marginLeft={{ xs: "31px", lg: "10px" }}
          >
            <strong>{"Frogi Kusama"}</strong>
          </Typography>
          <Typography
            sx={style.headingStyle}
            marginLeft={{ xs: "31px", lg: "10px" }}
          >
            An illustration of a psychedelic combination of the artist Yayoi
            Kusama and a frog. Ink on paper.
          </Typography>
          <Box
            component="img"
            src="/assets/projects/mixedProcjets/frogiKusama.png"
            alt="Frog Kusama"
            sx={{ width: "100%", marginTop: { xs: 2, md: 4 } }}
          />
        </Grid>
        <Grid item xs={0} md={1} /> {/* Spacer for gap */}
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: { xs: 0, md: -36 } }}>
        <Grid item xs={0} md={1} /> {/* Spacer for gap */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            marginTop: { xs: 0, md: 0 },
            marginLeft: { xs: "auto", md: "auto" },
          }}
        >
          <Typography
            fontSize={{ xs: "18px", lg: "22px" }}
            fontWeight={2000}
            marginLeft={{ xs: "31px", lg: "0px" }}
          >
            <strong>{"Fishland"}</strong>
          </Typography>
          <Typography variant="body1" sx={style.headingStyle}>
            An illustration of an interaction between a fish, a pineapple, and
            swimmers. Acrylic on paper.
          </Typography>
          <Grid
            container
            spacing={{ xs: 0.5, md: 1 }}
            sx={{ marginTop: { xs: 2, md: 4 } }}
          >
            <Grid item xs={6}>
              <Box
                component="img"
                src="/assets/projects/mixedProcjets/fish-sit-on-chair.png"
                alt="Fishland Part 1"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                component="img"
                src="/assets/projects/mixedProcjets/pineapple.png"
                alt="Fishland Part 2"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                component="img"
                src="/assets/projects/mixedProcjets/fish-fishing.png"
                alt="Fishland Part 3"
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Second Row */}
      <Grid container spacing={2} sx={{ marginTop: { xs: 4, md: -25 } }}>
        <Grid item xs={12} md={5}>
          <Typography
            fontSize={{ xs: "18px", lg: "22px" }}
            marginLeft={{ xs: "31px", lg: "10px" }}
            fontWeight={2000}
          >
            <strong>{"Film Noir"}</strong>
          </Typography>
          <Typography
            variant="body1"
            sx={style.headingStyle}
            marginLeft={{ xs: "31px", lg: "10px" }}
          >
            An illustration of an interpretation of a film noir movie scene.
            Paper Cutout.
          </Typography>
          <Grid container spacing={0} sx={{ marginTop: { xs: 2, md: 4 } }}>
            <Grid item xs={12}>
              <Box
                component="img"
                src="/assets/projects/mixedProcjets/film-noir-illustration.png"
                alt="Film Noir"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: { xs: -1, md: 4 },
            marginLeft: "-6px",
          }}
        >
          <Box
            component="img"
            src="/assets/projects/mixedProcjets/film-noir-origin.png"
            alt="Film Noir Movie Scene"
            sx={{ width: "100%", objectFit: "cover", marginTop: "auto" }}
            padding={"0px !importent"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            marginTop: { xs: 4, md: 12 },
            marginLeft: { xs: "auto", md: "auto" },
          }}
        >
          <Typography
            fontSize={{ xs: "18px", lg: "22px" }}
            fontWeight={2000}
            marginLeft={{ xs: "31px", lg: "0px" }}
          >
            <strong>{"Grasshopper Bike"}</strong>
          </Typography>
          <Typography variant="body1" sx={style.headingStyle}>
            An illustration of a combination of a grasshopper and bicycle.
            Crayon colors on paper.
          </Typography>
          <Box
            component="img"
            src="/assets/projects/mixedProcjets/GrasshopperBike.png"
            alt="Grasshopper Bike"
            sx={{ width: "100%", marginTop: { xs: 2, md: 4 } }}
          />
        </Grid>
        <Grid item xs={12} md={5} sx={{ marginTop: { xs: 4, md: 9 } }}>
          <Typography
            fontSize={{ xs: "18px", lg: "22px" }}
            marginLeft={{ xs: "31px", lg: "10px" }}
            fontWeight={2000}
          >
            <strong>{"R.I.P"}</strong>
          </Typography>
          <Typography
            variant="body1"
            sx={style.headingStyle}
            marginLeft={{ xs: "31px", lg: "10px" }}
          >
            An illustration of an Interpretation of a vintage matchbox. Acrylic
            on plywood.
          </Typography>
          <Grid container spacing={0} sx={{ marginTop: 4 }}>
            <Grid item xs={12}>
              <Box
                component="img"
                src="/assets/projects/mixedProcjets/ripBlack.png"
                alt="ripBlack"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: { xs: -1, md: 4 },
          }}
        >
          <Box
            component="img"
            src="/assets/projects/mixedProcjets/RipRed.png"
            alt="Film Noir Movie Scene"
            sx={{
              width: "100%",
              objectFit: "cover",
              marginTop: "auto",
              marginLeft: "-6px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );  
};

const style = {
  headingStyle: {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "149.805%",
    margin: "auto",
    whiteSpace: "pre-wrap",
    "@media (max-width: 600px)": {
      fontSize: "11px",
      lineHeight: "1.3",
      marginBottom: "0px",
      marginTop: "0px",
      marginLeft: "31px",
      marginRight: "31px",
    },
  },
};

export default TwoSideGallery;
