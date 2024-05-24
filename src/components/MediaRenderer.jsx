import React from "react";

const MediaRenderer = ({ media }) => {
  const isVideo = media.url.endsWith(".mp4");
  const isGif = media.url.endsWith(".gif");

  return isVideo ? (
    <video
      controls
      autoPlay
      style={
        media.orientation === "vertical"
          ? styles.verticalVideo
          : styles.horizontalVideo
      }
    >
      <source src={media.url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img
      src={media.url}
      alt={media.alt}
      style={isGif ? styles.gif : styles.image}
    />
  );
};

const styles = {
  image: {
    width: "85%",
    height: "auto",
  },
  gif: {
    maxWidth: "100%",
    maxHeight: "1200px",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    alignSelf: "center",
  },
  horizontalVideo: {
    width: "85%",
    height: "auto",
  },
  verticalVideo: {
    width: "85%",
    maxWidth: '1000px', 
    height: "auto",
  },
};

export default MediaRenderer;
