import Link from 'next/link';
import './Footer.css';
import Image from 'next/image';
import Logo from '../../../../public/images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faSquareFacebook, faSquareInstagram, faSquareXTwitter} from '@fortawesome/free-brands-svg-icons';
import { ArrowUpIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { faChevronCircleDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-title">
            <Link href={'/'}>
              <Image
                src={Logo}
                alt='xMatix'
                width={127.5}
                height={48}
              />
            </Link>
          </div>
          <p className="brand-tagline">Experience how xMatix can simplify operations &amp; amplify intelligence across your organization.
          </p>

          <div className="social-icons">
            <a href="#" aria-label="X"><FontAwesomeIcon icon={faSquareXTwitter} width={20} /></a>
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faSquareFacebook} /></a>
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faSquareInstagram} /></a>
            <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
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
              <li><Link href={'/pricing'} className="no-link">Our Plans</Link></li>
              <li>Leadership</li>
              <li>Career</li>
              <li>Partners / Alliances</li>
              <li>Newsroom</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© xMatix. All Rights Reserved.</p>
        <a href="" className="back-to-top">
          Back to top <ArrowUpIcon width={16} height={16} style={{strokeWidth: 4}} />
        </a>
      </div>
    </footer>
  );
}
