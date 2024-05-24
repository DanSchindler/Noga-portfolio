import React from 'react';
import ProjectCard from './ProjectCard';

const CardsGrid = ({ projectsData }) => {
    return (
        <div style={styles.cardGridStyle}>
            {projectsData.map((project, index) => (
                <ProjectCard
                    key={index}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    imageAlt={project.imageAlt}
                    style={styles.cardStyle}
                />
            ))}
        </div>
    )
}

const styles = {
    cardGridStyle: {
        display: 'grid',
        gridTemplateColumns: 'auto auto  ' ,
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: '82px',
        gap: '10px',
    },

}

export default CardsGrid;
