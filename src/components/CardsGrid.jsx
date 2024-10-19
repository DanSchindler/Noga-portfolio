import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const CardsGrid = ({ projectsData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getImageUrl = (project) => {
    return isMobile ? project.imageUrlMobile : project.imageUrl;
  };

  return (
    <Grid
      container
      spacing={{ xs: 0.5, sm: 0.5, md: 2, lg: 1, xl: 1  }}
      justifyContent="flex"
      sx={{ marginTop: { xs: "50px", sm: "82px" } }}
    >
      {projectsData.map((project, index) => (
        <Grid item xs={12} sm={6} key={index} style={{ display: "flex" }}>
          <ProjectCard
            id={project.id}
            title={project.title}
            subTitle={project.subTitle}
            description={project.description}
            imageUrl={getImageUrl(project)}
            imageAlt={project.imageAlt}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsGrid;
