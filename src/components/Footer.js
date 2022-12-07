import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/david-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/david-codner-008483251/"><img src={navIcon1} alt="LinkedIn Icon" /></a>
              <a href="https://github.com/dcodner24"><img src={navIcon2} alt="Github Icon" /></a>
            </div>
            <p>Thank you for your time!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
