import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
         <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://cdn.dribbble.com/users/6268398/screenshots/14607836/restaurant-logo-5.png"
              width="75"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            Cafe Elite
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header