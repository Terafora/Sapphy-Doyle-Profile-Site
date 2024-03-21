import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <h2>Sapphy Doyle</h2>
      <ul>
        <li><link to="/">Home</link></li>
        <li><link to="/about">About</link></li>
        <li><link to="/skills">Skills</link></li>
        <li><link to="/history">History</link></li>
        <li><link to="/contact">Contact</link></li>
      </ul>
    </nav>
  );
}