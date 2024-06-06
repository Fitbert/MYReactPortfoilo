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
                Hi I&apos;m a new developer with a a varied background.
                ith over 6 years of professional experience in risk management, compliance, and fraud prevention, I bring a wealth of knowledge and expertise to the table. My tenure at renowned companies like Accenture, BcForward, and Apple has equipped me with an in-depth understanding of regulatory frameworks such as the Digital Markets Act, GDPR, and other EU regulations. I excel in risk assessment, data protection, and privacy compliance, ensuring adherence to industry standards and best practices. My proficiency in ticketing management systems like JIRA and ServiceNow, coupled with my strong analytical and problem-solving skills, allows me to effectively identify and mitigate potential risks, conduct investigations, and implement successful remediation plans. I am a skilled communicator, adept at collaborating cross-functionally and liaising with stakeholders to maintain comprehensive documentation and reporting. My commitment to continuous learning and staying updated on regulatory changes further solidifies my ability to navigate the ever-evolving landscape of compliance and risk management. 
            </p>

        </div>
        </>
    );
}