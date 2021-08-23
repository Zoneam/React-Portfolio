import "./topbar.scss";
import { Person, Mail} from "@material-ui/icons";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            HM
          </a>
          <div className="itemContainer"><a href="tel:9168339297"><Person className="icon" /><span>(916)833-9297</span></a>
          </div>
          <div className="itemContainer">

          <a href="mailto:zoneam@gmail.com"><Mail className="icon" /><span>zoneam@gmail.com</span></a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/hayk-mnatsakanyan-34041096/" target="_blank" rel="noreferrer"><LinkedInIcon className="icon" /><span>LinkedIn</span></a>
          </div>
          <div className="itemContainer">
          <a href="https://github.com/Zoneam" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /><span>GitHub</span></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
