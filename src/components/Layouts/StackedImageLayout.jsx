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
        gap: "10px",
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
                  marginTop: "150px",
                  color: "#181818",
                  fontFamily: "Poppins",
                  fontSize: "50px",
                  fontWeight: "700",
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
            {
              media.description && (
              <Box
                sx={{
                  maxWidth: { xs: "none", lg: "750px" },
                  margin: { xs: "0", lg: "0 auto" },
                  padding: { xs: "0", lg: "0 20px" },
                }}
              >
                <Box sx={{ display: { xs: "block", sm: "none" } }}>
                 <Typography sx={styles.title}>
                    {media.description.split(" | ").map((part, i) => (
                      <span key={i} style={{ fontWeight: i === 0 ? 600 : 200 }}>
                        {part}
                      </span>
                    ))}
                  </Typography>
                </Box>

                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Typography
                    sx={{
                      ...styles.title,
                      fontSize: "16px",
                      lineHeight: 1.6,
                      marginBottom: "60px",
                      marginTop: "60px",
                      textAlign: "center",
                    }}
                  >
                    {media.description.split(" | ").map((part, i) => (
                      <span key={i} style={{ fontWeight: i === 0 ? 600 : 200 }}>
                        {part}
                      </span>
                    ))}
                  </Typography>
                </Box>
              </Box>)
            }
            <Grid
              item
              sx={{
                marginTop:
                  index == 0
                    ? 0
                    : 0,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                "@media (max-width: 600px)": {
                  marginTop:
                    index == 0
                      ? "0px"
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

const styles = {
  title: {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "200",
    lineHeight: "149.805%",
    margin: "auto",
    marginLeft: "10px",
    whiteSpace: "pre-wrap",
    "@media (max-width: 600px)": {
      fontSize: "12px",
      lineHeight: "1.3",
      marginBottom: "25px",
      marginTop: "25px",
      marginLeft: "31px",
      marginRight: "31px",
    },
  },
  courseDetails: {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "200",
    lineHeight: "149.805%",
    margin: "auto",
    marginLeft: "10px",
    marginBottom: "50px",
    whiteSpace: "pre-wrap",
    "@media (max-width: 600px)": {
      fontSize: "10px",
      fontWeight:'400',
      lineHeight: "1.3",
      marginBottom: "40px",
      marginTop: "8px",
      marginLeft: "31px",
      marginRight: "31px",
    },
  },
  notFound: {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "22px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "149.805%",
    margin: "auto",
    marginBottom: "50px",
    whiteSpace: "pre-wrap",
    textAlign: "center",
    "@media (max-width: 600px)": {
      fontSize: "18px",
      marginBottom: "30px",
    },
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default StackedImageLayout;
