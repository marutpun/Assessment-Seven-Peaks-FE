import React from 'react';
import './footer.scss';

function Footer({ children, ...restProps }) {
  return (
    <footer className="Footer Footer___primary" {...restProps}>
      {children}
    </footer>
  );
}

export default Footer;
