import { Navbar, Nav } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import React from "react";





export const NavBar = () => {
   /*  const [navbarBg, setNavbarBg] = useState("transparent");

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);
    
    const handleScroll = () => {
        if (window.scrollY > 1) {
          setNavbarBg("light");
        } else {
          setNavbarBg("light");
        }
    }; */
  
    return (
        
        <Navbar className="navbar" bg="light" expand="lg" fixed="top" transitionClassName="navbar-transition">
            <Navbar.Brand className="navbar-brand">
                <a href="https://github.com/Yankee3177/Projects" target="_blank" rel="noreferrer">
                <img src='/images/githubLogo.png' alt='Github Logo'  className="logo" />
                </a>
                <a href="https://www.linkedin.com/in/yankiel-cruz-resto-46051a131/" target="_blank" rel="noreferrer">
                <img src='/images/LinkedInLogo.png' alt='LinkedIn Logo' className="logo" />
                </a>
                <span className="brand-text">My Website</span>
            
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={ScrollLink} to="projects" smooth={true} duration={500}>Projects</Nav.Link>
            <Nav.Link as={ScrollLink} to="tech" smooth={true} duration={500}>Technologies</Nav.Link>
            <Nav.Link as={ScrollLink} to="contacts" smooth={true} duration={500}>Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        

    )
  }