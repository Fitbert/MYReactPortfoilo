import React from "react";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "./footer.css";


const Footer = () => {
    return (
        <div style={{paddingTop: "30px", paddingBottom: "30px"}}>
            <Grid
                 style={{ display: "flex", justifyContent: "center"}}
                 container
                 sx={{ color: "text.primary"}}
                 >
            <Grid
          style={{ display: "flex", justifyContent: "space-evenly" }}
          item
          xs={4}
        >
             <LinkedInIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href =
                "https://www.linkedin.com/in/albert-terrazas/")
            }
          />
          <GitHubIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href = "https://github.com/fitbert")
            }
          />
          <EmailIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href = "mailto:albert.terrazas@gmail.com")
            }
          />
           </Grid>
      </Grid>
     </div>
    );
};

// Export
export default Footer;