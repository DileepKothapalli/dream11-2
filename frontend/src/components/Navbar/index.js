import React from "react";
import { Container, Div, Link, Nav } from "./NavbarELements";

const Navbar = () => {
  return (
    <Div>
      <Container>
        <Link href="/">Home</Link>
        <Link href="/post">Post</Link>
      </Container>
    </Div>
  );
};

export default Navbar;
