import React from "react";

export default function Footer() {
  return (
    <footer className="section">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="brand-title">
            <span className="x">x</span>Matix
          </div>

          <p className="brand-tagline">
            Experience how xMatix can simplify operations &amp; amplify
            <br />
            intelligence across your organization.
          </p>

          <div className="social-icons">
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">▢</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>

        {/* Columns */}
        <div className="footer-columns">
          <div className="column">
            <h3>Products</h3>
            <ul>
              <li>xMatix Platform</li>
              <li>xMatix Data Fabric</li>
              <li>xMatix Sense</li>
            </ul>
          </div>

          <div className="column">
            <h3>Resources</h3>
            <ul>
              <li>Blogs</li>
              <li>Guides</li>
              <li>Case Studies</li>
              <li>Webinars / Events</li>
              <li>Documentation</li>
              <li>Release Notes</li>
              <li>Analyst Briefing</li>
            </ul>
          </div>

          <div className="column">
            <h3>Company</h3>
            <ul>
              <li>About xMatix</li>
              <li>Leadership</li>
              <li>Career</li>
              <li>Partners / Alliances</li>
              <li>Newsroom</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© xMatix. All Rights Reserved.</p>
        <a href="#" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
