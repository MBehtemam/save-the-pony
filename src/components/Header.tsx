import React from "react";
import Row from "../layouts/Grid/Row.styled";
import Col from "../layouts/Grid/Container.styled";
import backgroundImage from "../assets/images/header-background.jpg";
const Header = () => (
  <Row>
    <Col>
      <header style={{ width: "100%" }}>
        <img
          src={backgroundImage}
          style={{
            width: "100%"
          }}
        />
      </header>
    </Col>
  </Row>
);

export default Header;
