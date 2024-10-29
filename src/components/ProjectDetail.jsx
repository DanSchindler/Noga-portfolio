import React, { Suspense, lazy, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getNumOfProjects, projectsData } from "../constans";
import UnderConstruction from "../screens/UnderConstruction";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const layouts = {
  StackedImageLayout: lazy(() => import("./Layouts/StackedImageLayout")),
  TwoSideGallery: lazy(() => import("./Layouts/TwoSideGallery")),
};

const ProjectDescription = ({ description, sx, courseDetails }) => {
  if (!description) return null;

  const parts = description.split(" | ");
  if (parts.length > 1) {
    return (
      <Box
        sx={{
          maxWidth: { xs: "none", lg: "750px" },
          margin: { xs: "0", lg: "0 auto" },
          padding: { xs: "0", lg: "0 20px" },
        }}
      >
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Typography
            marginTop={"40px"}
            fontSize={"18px"}
            fontWeight={2000}
            marginLeft={"31px"}
          >
            {parts[0]}
          </Typography>
          <Typography sx={styles.title}>
            {parts.slice(1).join(" | ").trim()}
          </Typography>
          <Typography sx={styles.courseDetails}>{courseDetails}</Typography>
        </Box>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "26px",
              fontFamily: "Poppins",
              color: "#181818",
              fontWeight: 700,
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            {parts[0]}
          </Typography>
          <Typography
            sx={{
              ...sx,
              fontSize: "16px",
              lineHeight: 1.6,
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            {parts[1]}
          </Typography>
          <Typography
            sx={{
              ...sx,
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: 1.6,
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            {parts[2]}
          </Typography>
          <Typography
            sx={{
              ...sx,
              fontSize: { xs: "10px", lg: "12px" },
              fontWeight: 400,
              lineHeight: 1.6,
              marginBottom: "80px",
              textAlign: "center",
            }}
          >
            {courseDetails}
          </Typography>
        </Box>
      </Box>
    );
  }
  return <Typography sx={sx}>{description}</Typography>;
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Typography sx={styles.notFound}>Project not found</Typography>;
  }

  const LayoutComponent = layouts[project.layout];
  let nextPageId = (Number(id) + 1) % (getNumOfProjects() + 1);
  nextPageId = nextPageId == 0 ? 1 : nextPageId;

  return (
    <Box>
      <ProjectDescription
        description={project.description}
        sx={styles.title}
        courseDetails={project.courseDetails}
      />
      <Suspense fallback={<Box sx={styles.spinner}>Loading...</Box>}>
        {LayoutComponent ? (
          <LayoutComponent
            project={project}
            gap={project.gap || "0px"}
            postHeaderGap={project.postHeaderGap || "10px"}
          />
        ) : (
          <UnderConstruction />
        )}
      </Suspense>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          marginTop: { xs: "40px", md: "80px" }, 
        }}
      >
        <Link
          to={`/project/${nextPageId}`}
          style={{
            ...styles.nextButton,
            fontSize: window.innerWidth < 600 ? "15px" : "25px",
          }}
        >
          Next Project <span style={styles.arrow}>{">"}</span>
        </Link>
      </Box>
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
    marginBottom: "50px",
    whiteSpace: "pre-wrap",
    "@media (max-width: 600px)": {
      fontSize: "12px",
      lineHeight: "1.3",
      marginBottom: "0px",
      marginTop: "8px",
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
      fontWeight: "400",
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
  nextButton: {
    display: "inline-flex",
    color: "#181818",
    fontFamily: "Poppins",
    fontSize: "25px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "normal",
    textDecoration: "none",
    cursor: "pointer",
    transition: "opacity 0.2s ease",
"&:hover": {
      color: "#FF5733", // Change this to your desired hover color
    },
  },
  arrow: {
    marginLeft: "4px",
  },
};

export default ProjectDetail;
