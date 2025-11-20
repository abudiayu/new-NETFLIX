import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css"

function Footer() {
  return (
    <>
        <div className='footer-auto-container'>
          <div className='footer-container'>
            <div className='footer-icons'>
              <FacebookOutlinedIcon/>
              <InstagramIcon/>
              <YouTubeIcon/>
            </div>
            <ul className="footer-links">
                <li><a href="/">Audio Description</a></li>
                <li><a href="/">Help Center</a></li>
                <li><a href="/">Gift Cards</a></li>
                <li><a href="/">Media Center</a></li>
                <li><a href="/">Investor Relations</a></li>
                <li><a href="/">Jobs</a></li>
                <li><a href="/">Terms of Use</a></li>
                <li><a href="/">Privacy</a></li>
                <li><a href="/">Legal Notices</a></li>
                <li><a href="/">Cookie Preferences</a></li>
                <li><a href="/">Corporate Information</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
            <div className="footer-bottom">
              <p>©ABDUL QADIR's Netflix — 2025 Movie App </p> <br></br>
              <p style={{ color: "white" }}>
                Contact Me:{" "}
                <a href="mailto:abudiayuu@gmail.com" style={{ color: "#4da6ff" }}>
                  abudiayuu@gmail.com
                </a>
               </p>
              <p style={{ color: "white" }}>
                Phone:{" "}
                <a href="tel:+251901013902" style={{ color: "#4da6ff" }}>
                  +251901013902
                </a>
              </p>               
            </div>
          </div>

        </div>
    </>
  )
}

export default Footer;
