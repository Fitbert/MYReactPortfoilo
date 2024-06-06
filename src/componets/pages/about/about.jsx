import "./About.css";
import CardMedia from "@mui/material/CardMedia";


//render about page
export default function About(){
    return(
        <>
        <div className="image-container">
        <CardMedia
        className="color-img"
        component="img"
        style={{ height:  "auto", width: "50%", margin: " 0 auto", paddingTop: "20px"}}
        alt="Me"
        
        image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto"
        />
        </div>

        <div style={{width: "60%", margin: "0 auto"}}>
            <h1 id="about-me">About Me</h1>
            <p id="para_About">
                Hi I&apos;m a new developer with a a varied background will fill out more soon. 
            </p>

        </div>
        </>
    );
}