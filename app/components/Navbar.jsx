"use client";

import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Logo = styled.img`
  height: 50px; /* Adjust the logo size as needed */
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: #333; /* Adjust the text color as needed */
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff; /* Change hover color here */
  }
`;

const Button = styled.a`
  padding: 10px 20px;
  background-color: #007bff; /* Adjust button background color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none; /* Add this to remove underline from link */

  &:hover {
    background-color: #0056b3; /* Change button hover color here */
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Link href="/" passHref>
        <Logo src="/logo.png" alt="Logo" />
      </Link>
      <Menu>
        <Link href="/" passHref><MenuItem>Home</MenuItem></Link>
        <Link href="/docs" passHref><MenuItem>Docs</MenuItem></Link>
        <Link href="/demo" passHref><MenuItem>Demo</MenuItem></Link>
      </Menu>
      <Link href="/learn-more" passHref>
        <Button>Learn More</Button>
      </Link>
    </Nav>
  );
};

export default Navbar;
