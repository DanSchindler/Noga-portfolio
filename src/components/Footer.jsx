import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import instagramLogo from "/public/assets/icons/instagramLogo.svg";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        padding: "0",
        backgroundColor: "#fdfdfd",
        borderTop: {sm: "1px solid #000"},
        borderBottom: {sm: "1px solid #000"},
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        backgroundColor: "transparent",
        marginBottom: "80px",
        marginTop: "80px",
        [theme.breakpoints.down("sm")]: {
          marginTop: "40px",
          marginBottom: "40px",
          padding: "2px 0",

        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          margin: "auto",
          gap: "20px",
          fontSize: "20px",
          fontWeight: 300,
          background: "#fdfdfd",
          borderRadius: "10px 10px 0 0",
          backgroundColor: "transparent",
          padding: "0",
          flexWrap: "wrap",
          [theme.breakpoints.down("sm")]: {
            gap: '10px'
          },
        }}
      >
        <Link
          href="https://www.instagram.com/nogarosner/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            component="img"
            src={instagramLogo}
            alt="Instagram"
            sx={{
              width: isMobile ? 20 : 24,
              height: isMobile ? 20 : 24,
            }}
          />
        </Link>
        <Link
          href="mailto:nogarosner@gmail.com"
          sx={{
            textDecoration: "none",
            color: "#000",
            fontSize: isMobile ? "12px" : "16px",
            fontWeight: 300,
            display: "block",
            margin: "2.5px",
          }}
        >
          nogarosner@gmail.com
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
