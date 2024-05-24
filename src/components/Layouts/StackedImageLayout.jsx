import React from "react";
import MediaRenderer from "../MediaRenderer";

const StackedImageLayout = ({ project }) => {
  const images = project.images;

  return (
    <div style={styles.container}>
      {project.coverMedia && (
        <>
        <MediaRenderer media={project.coverMedia} isCover />
        <div style={styles.marginCover}></div>
        </>

      )}
      {images &&
        images.map((media, index) => (
          <MediaRenderer
            key={index}
            media={media}
            style={index === 0 && project.coverMedia ? styles.firstImage : {}}
          />
        ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  marginCover: {
    marginTop: "213px", 
  },
};

export default StackedImageLayout;
