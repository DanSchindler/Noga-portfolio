import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../App.css";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function ProjectCard({ id, title, subTitle, imageUrl, imageAlt }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCardClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <Card
    style={{ ...style.card, cursor: "pointer" }} // Add cursor pointer here
    onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={imageAlt}
        sx={style.cardImg}
      />
      <div
        style={{
          ...style.cardGrayCover,
          opacity: hover && !isMobile ? 1 : 0,
        }}
      />
      {hover && (
        <CardContent sx={style.projectContent}>
          <Typography
            fontFamily={"Poppins"}
            fontStyle={"normal"}
            fontSize={{
              xs: "14px",
              sm: "16px",
              lg: "20px",
              xl: "30px",
            }}
            fontWeight={{
              sm: "200",
              lg: "400",
              xl: "400",
            }}
            color={"#fff"}
            textAlign={"center"}
            letterSpacing={"0.6px"}
          >
            {title}
          </Typography>
          {subTitle && !isMobile && (
            <Typography
              fontFamily={"Poppins"}
              fontStyle={"normal"}
              fontSize={{
                sm: "12px",
                lg: "17px",
                xl: "22px",
              }}
              fontWeight={"100"}
              color={"#fff"}
              textAlign={"center"}
              marginTop={{
                sm: "0px",
                lg: "0px",
                xl: "0px",
              }}
            >
              {subTitle}
            </Typography>
          )}
        </CardContent>
      )}
    </Card>
  );
}

const style = {
  card: {
    position: "relative",
    overflow: "hidden",
    whiteSpace: "pre-wrap",
    borderRadius: "0px",
    width: "100%",
    boxShadow: "none",
  },
  cardImg: {
    height: "100%",
    width: "102%",
    transition: "opacity 0.5s",
    boxShadow: "none",
  },
  cardGrayCover: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    transition: "opacity 0.5s",
  },
  projectContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
    fontSize: "40px",
    fontWeight: "600",
  },
};

export default ProjectCard;
