import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default function Header({ children, ...restProps }) {
  return (
    <header className="Header Header___primary" {...restProps}>
      {children}
    </header>
  );
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return (
    <div className="container" {...restProps}>
      {children}
    </div>
  );
};

Header.Img = function HeaderImg({ src, alt, ...restProps }) {
  return <img src={src} alt={alt} className="Header_logo" {...restProps} />;
};

Header.Form = function HeaderForm({ children, ...restProps }) {
  return (
    <form className="Header_form" {...restProps}>
      {children}
    </form>
  );
};

Header.Label = function HeaderLabel({ children, ...restProps }) {
  return <label className="Header_label" {...restProps}>{children}</label>;
};

Header.Input = function HeaderInput({ type, ...restProps }) {
  return <input className="Header_input" type={type} {...restProps} />;
};

Header.Btn = function HeaderBtn({ children, ...restProps }) {
  return <button className="Header_btn">{children}</button>;
};

Header.IconSearch = function HeaderIconSearch({ ...restProps }) {
  return <span className="Header_iconSearch" {...restProps} />;
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return (
    <div className="Header_nav" {...restProps}>
      {children}
    </div>
  );
};

Header.Brand = function HeaderBrand({ children, ...restProps }) {
  return (
    <div className="Header_brand" {...restProps}>
      {children}
    </div>
  );
};

Header.Search = function HeaderSearch({ children, ...restProps }) {
  return (
    <div className="Header_search" {...restProps}>
      {children}
    </div>
  );
};
