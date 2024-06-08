import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const TwoSideGallery = () => {
  return (
    <Box sx={{ padding: 0, width: { xs: "100%", md: "100%" }, margin: "auto" , marginTop: '30px'}}>
      {/* First Row */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Typography variant="body1" sx={style.headingStyle}>
            "Frogi Kusama" | An illustration of a psychedelic combination of the
            artist Yayoi Kusama and a frog. Ink on paper.
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
      <Grid container spacing={2} sx={{ marginTop: { xs: 0, md: -20 } }}>
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
          <Typography variant="body1" sx={style.headingStyle}>
            "Fishland" | An illustration of an interaction between a fish, a
            pineapple, and swimmers. Acrylic on paper.
          </Typography>
          <Grid container spacing={1} sx={{ marginTop: { xs: 2, md: 4 } }}>
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
      <Grid container spacing={2} sx={{ marginTop: { xs: 4, md: -17 } }}>
        <Grid item xs={12} md={5}>
          <Typography variant="body1" sx={style.headingStyle}>
            "Film Noir" | An illustration of an interpretation of a film noir
            movie scene. Paper Cutout.
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
          }}
        >
          <Box
            component="img"
            src="/assets/projects/mixedProcjets/film-noir-origin.png"
            alt="Film Noir Movie Scene"
            sx={{ width: "100%", objectFit: "cover", marginTop: "auto" }}
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
          <Typography variant="body1" sx={style.headingStyle}>
            Grasshopper Bike | An illustration of a combination of a grasshopper
            and bicycle. Crayon colors on paper.
          </Typography>
          <Box
            component="img"
            src="/assets/projects/mixedProcjets/GrasshopperBike.png"
            alt="Grasshopper Bike"
            sx={{ width: "100%", marginTop: { xs: 2, md: 4 } }}
          />
        </Grid>
        <Grid item xs={12} md={5} sx={{ marginTop: { xs: 4, md: 12 } }}>
          <Typography variant="body1" sx={style.headingStyle}>
            R.I.P | An illustration of an Interpretation of a vintage matchbox.
            Acrylic on plywood.
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
            sx={{ width: "100%", objectFit: "cover", marginTop: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const style = {
  headingStyle: {
    color: "#181818",
    fontFamily: "Poppins, sans-serif",
    fontSize: { xs: "14px", md: "22px" },
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: { xs: "100%", md: "100%" },
  },
};

export default TwoSideGallery;
