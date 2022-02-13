import React from 'react';
import { year } from '../utils/yearGenerator';

const Footer = () => {
  return (
    <footer className="section footer">
      <p className="copyright">&copy; {year} by KORUS</p>
    </footer>
  );
};

export default Footer;
