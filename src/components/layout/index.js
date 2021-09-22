import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import Footer from '../footer';
import './layout.scss';

function Layout({ children }) {
  return (
    <div className="Layout">
      <HeaderContainer />
      <main className="Layout_wrapper">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
