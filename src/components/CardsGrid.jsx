import React from 'react';
import ProjectCard from './ProjectCard';
import Grid from '@mui/material/Grid';

const CardsGrid = ({ projectsData }) => {
    return (
        <Grid container spacing={1} justifyContent="center" style={{ marginTop: '82px' }}>
            {projectsData.map((project, index) => (
                <Grid item xs={12} sm={6} key={index} style={{ display: 'flex' }}>
                    <ProjectCard
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        imageAlt={project.imageAlt}
                    />
                </Grid>
            ))}
        </Grid> 
    );
};

export default CardsGrid;
