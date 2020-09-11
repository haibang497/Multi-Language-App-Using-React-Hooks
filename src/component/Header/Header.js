import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {Text} from '../TranslateLanguage/TransLanguage';

import "./Header.css";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Header = () => {
  return (
    <Container>
      <Navbar>
        <Navbar.Brand href="#">
          <img
            alt=""
            src="https://www.tma-innovation.center/image/logo.svg"
            width="150px"
            height="100%"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Nav className="top-menu">
          <Nav.Link>{Text("header.header1")}</Nav.Link>
          <Nav.Link>{Text("header.header2")}</Nav.Link>
          <Nav.Link>{Text("header.header3")}</Nav.Link>
          <Nav.Link>{Text("header.header4")}</Nav.Link>
          <Nav.Link>{Text("header.header5")}</Nav.Link>
          <Nav.Link>{Text("header.header6")}</Nav.Link>
          <Nav.Link>{Text("header.header7")}</Nav.Link>
          <Nav.Link>{Text("header.header8.test")}</Nav.Link>
          <LanguageSelector/>
        </Nav>
      </Navbar>
    </Container>
  );
};
export default Header;
