import React, { Fragment } from 'react';
import './article.scss';

export default function Article({ children, ...restProps }) {
  return (
    <article className="Article" {...restProps}>
      {children}
    </article>
  );
}

Article.Main = function ArticleMain({ children, ...restProps }) {
  return (
    <main className="Article_main" {...restProps}>
      {children}
    </main>
  );
};
Article.Aside = function ArticleAside({ children, ...restProps }) {
  return (
    <aside className="Article_aside" {...restProps}>
      {children}
    </aside>
  );
};

Article.Bookmark = function ArticleBookmark({ children, ...restProps }) {
  return (
    <button type="button" className="Article_btnBookmark" {...restProps}>
      {children}
    </button>
  );
};
Article.DateTime = function ArticleDateTime({ time, children, ...restProps }) {
  return (
    <time dateTime={time} {...restProps}>
      {children}
    </time>
  );
};
Article.Title = function ArticleTitle({ children, ...restProps }) {
  return <h2 {...restProps}>{children}</h2>;
};
Article.Details = function ArticleDetails({ children, ...restProps }) {
  return <p {...restProps}>{children}</p>;
};

Article.ImgWrapper = function ArticleImgWrapper({ children, ...restProps }) {
  return (
    <div className="Article_imgWrapper" {...restProps}>
      {children}
    </div>
  );
};

Article.Media = function ArticleMedia({ src, alt, ...restProps }) {
  return <img src={src} alt={alt} {...restProps} />;
};
