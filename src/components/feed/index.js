import React from 'react';
import './feed.scss';
import { Link } from 'react-router-dom';

export default function Feed({ children, ...restProps }) {
  return (
    <div className="Feed" {...restProps}>
      {children}
    </div>
  );
}

Feed.Header = function FeedHeader({ children, ...restProps }) {
  return (
    <header className="Feed_header" {...restProps}>
      {children}
    </header>
  );
};

Feed.Heading = function FeedHeading({ children, ...restProps }) {
  return (
    <h2 className="Feed_heading" {...restProps}>
      {children}
    </h2>
  );
};

Feed.Tools = function FeedTools({ children, ...restProps }) {
  return (
    <div className="Feed_tools" {...restProps}>
      {children}
    </div>
  );
};

Feed.BtnBookmark = function FeedBtnBookmark({ children, ...restProps }) {
  return (
    <Link to="/bookmark" className="Feed_btnBookmark" {...restProps}>
      {children}
    </Link>
  );
};

Feed.Wrapper = function FeedWrapper({ children, ...restProps }) {
  return (
    <div className="Feed_wrapper" {...restProps}>
      {children}
    </div>
  );
};

Feed.Cell = function FeedCell({ children, ...restProps }) {
  return (
    <div className="Feed_cell" {...restProps}>
      {children}
    </div>
  );
};

Feed.Card = function FeedCard({ children, ...restProps }) {
  return (
    <div className="Feed_card" {...restProps}>
      {children}
    </div>
  );
};

Feed.CardBody = function FeedCardBody({ children, ...restProps }) {
  return (
    <div className="Feed_cardBody" {...restProps}>
      {children}
    </div>
  );
};

Feed.Overlay = function FeedOverlay({ children, ...restProps }) {
  return (
    <Link className="Feed_overlay" {...restProps}>
      {children}
    </Link>
  );
};

Feed.Image = function FeedImage({ src, alt, ...restProps }) {
  return <img src={src} alt={alt} {...restProps} />;
};

Feed.Section = function FeedSection({ children, ...restProps }) {
  return (
    <section className="Feed_section" {...restProps}>
      {children}
    </section>
  );
};
