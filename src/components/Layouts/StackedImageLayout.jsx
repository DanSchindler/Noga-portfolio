import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MediaRenderer from "../MediaRenderer";

const StackedImageLayout = ({ project, gap = 20, postHeaderGap = 80 }) => {
  const images = project.images;
  const headerIndex =
    project.headerIndex !== undefined ? project.headerIndex : -1;

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        gap: '10px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {project.coverMedia && (
        <>
          <MediaRenderer media={project.coverMedia} isCover />
          <Box
            sx={{
              marginTop: "180px",
              "@media (max-width: 600px)": { marginTop: "15px" }, 
            }}
          ></Box>
        </>
      )}
      {images &&
        images.map((media, index) => (
          <React.Fragment key={index}>
            {index === headerIndex + 1 && project.process && (
              <Typography
                variant="h2"
                sx={{
                  marginTop: "130px",
                  marginBottom: "50px",
                  color: "#181818",
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  fontWeight: "300",
                  lineHeight: "149.805%",
                  textAlign: "center",
                  "@media (max-width: 600px)": {
                    marginTop: "70px",
                    marginBottom: "0px",
                    fontSize: "16px",
                  },
                }}
              >
                Process
              </Typography>
            )}
            <Grid
              item
              sx={{
                marginTop:
                  headerIndex != -1 && index > headerIndex + 1
                    ? postHeaderGap
                    : gap,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                "@media (max-width: 600px)": {
                  marginTop:
                    headerIndex != -1 && index > headerIndex + 1
                      ? "40px"
                      : "-6px",
                },
              }}
            >
              <MediaRenderer media={media} />
            </Grid>
          </React.Fragment>
        ))}
    </Box>
  );
};

export default StackedImageLayout;
