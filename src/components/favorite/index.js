import React from 'react';
import './favorite.scss';
import { Link } from 'react-router-dom';

export default function Favorite({ children, ...restProps }) {
  return (
    <div className="Favorite" {...restProps}>
      {children}
    </div>
  );
}

Favorite.Heading = function FavoriteHeading({ children, ...restProps }) {
  return (
    <h2 className="Favorite_heading" {...restProps}>
      {children}
    </h2>
  );
};

// Favorite.Header = function FavoriteHeader({children, ...restProps}) {
//   return <header className="Favorite_header" {...restProps}>{children}</header>
// }

Favorite.Wrapper = function FavoriteWrapper({ children, ...restProps }) {
  return (
    <div className="Favorite_wrapper" {...restProps}>
      {children}
    </div>
  );
};

Favorite.Cell = function FavoriteCell({ children, ...restProps }) {
  return (
    <div className="Favorite_cell" {...restProps}>
      {children}
    </div>
  );
};

Favorite.Card = function FavoriteCard({ children, ...restProps }) {
  return (
    <div className="Favorite_card" {...restProps}>
      {children}
    </div>
  );
};

Favorite.Body = function FavoriteBody({ children, ...restProps }) {
  return (
    <div className="Favorite_body" {...restProps}>
      {children}
    </div>
  );
};
Favorite.Overlay = function FavoriteOverlay({ children, ...restProps }) {
  return (
    <Link className="Favorite_overlay" {...restProps}>
      {children}
    </Link>
  );
};
Favorite.Image = function FavoriteImage({ src, alt, ...restProps }) {
  return <img className="Favorite_" src={src} alt={alt} {...restProps} />;
};
