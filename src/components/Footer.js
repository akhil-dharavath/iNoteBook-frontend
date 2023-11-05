import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton } from "@mui/material";

const Footer = () => {
  const NewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        background: "teal",
        color: "white",
      }}
    >
      <p style={{ marginTop: "5px", marginBottom: "-5px" }}>
        &copy; {new Date().getFullYear()} akhildGithub.iNoteBook. All rights
        reserved.
      </p>
      <div className="d-flex">
        <h6 style={{ display: "inline", marginTop: "10px" }}>Contact us : </h6>
        <a href="mailto:mailforakhild@gmail.com">
          <IconButton>
            <EmailIcon sx={{ color: "white" }} />
          </IconButton>
        </a>
        <IconButton
          onClick={() => NewTab("https://www.facebook.com/akhil.dharavath.7")}
        >
          <FacebookIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          onClick={() => NewTab("https://www.instagram.com/_akhil.dharavath_/")}
        >
          <InstagramIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton onClick={() => NewTab("https://twitter.com/_akhil_d_")}>
          <TwitterIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
