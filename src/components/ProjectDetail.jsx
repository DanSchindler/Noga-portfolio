import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../constans";
import UnderConstruction from "../screens/UnderConstruction";
import { Box, Typography } from "@mui/material";

const layouts = {
  StackedImageLayout: lazy(() => import("./Layouts/StackedImageLayout")),
  TwoSideGallery: lazy(() => import("./Layouts/TwoSideGallery")),
};

const ProjectDescription = ({ description, sx }) => {
  if (!description) return null;

  const parts = description.split(" | ");
  if (parts.length > 1) {
    return (
      <>
        <Typography align="start" marginTop={"40px"} fontSize={{xs: "18px", lg:"22px"}} fontWeight={2000} marginLeft={{xs:'31px',lg:'10px'}} >
          <strong>{parts[0]}</strong>
        </Typography>
        <Typography sx={sx}>{parts.slice(1).join(" | ").trim()}</Typography>
      </>
    );
  }
  return <Typography sx={sx}>{description}</Typography>;
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <Typography sx={styles.notFound}>Project not found</Typography>;
  }

  const LayoutComponent = layouts[project.layout];

  return (
    <Box>
      <ProjectDescription description={project.description} sx={styles.title} />
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
    </Box>
  );
};

const styles = {
  title: {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "149.805%",
    margin: "auto",
    marginLeft: "10px",
    marginBottom: "50px",
    whiteSpace: "pre-wrap",
    "@media (max-width: 600px)": {
      fontSize: "14px",
      lineHeight: "1.3",
      marginBottom: "40px",
      marginTop: "0px",
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

export default ProjectDetail;
