import React from "react";
import { Box } from "@mui/material";

const MediaRenderer = ({ media }) => {
  const isVideo = media.url.endsWith(".mp4");
  const isGif = media.url.endsWith(".gif");

  const getStyle = () => {
    if (isGif) return styles.gif;
    switch (media.orientation) {
      case "vertical":
        return styles.verticalVideo;
      case "smaller":
        return styles.smaller;
      case "vertical smaller":
        return styles.verticalSmaller;
      default:
        return styles.horizontalVideo;
    }
  };

  return isVideo ? (
    <Box
      component="video"
      controls
      autoPlay
      src={media.url}
      sx={getStyle()}
    />
  ) : (
    <Box
      component="img"
      src={media.url}
      alt={media.alt}
      sx={getStyle()}
    />
  );
};

const styles = {
  gif: {
    maxWidth: "100%",
    maxHeight: "8a00px",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    alignSelf: "center",
  },
  horizontalVideo: {
    width: "100%",
    '@media (max-width: 600px)': {
      width: "100%",
    },
  },
  smaller: {
    width: "75%",
    height: "auto",
    '@media (max-width: 600px)': {
      width: "90%",
    },
  },
  verticalVideo: {
    width: "85%",
    maxWidth: '500px',
    height: "auto",
    '@media (max-width: 600px)': {
      width: "100%",
    },
  },
  verticalSmaller: {
    width: "75%",
    maxWidth: '800px',
    height: "auto",
    '@media (max-width: 600px)': {
      width: "75%",
      maxWidth: '180px',
    },
  },
};

export default MediaRenderer;
