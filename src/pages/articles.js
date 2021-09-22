import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Article } from '../components';
import logoPeaks from '../../static/Logo_White.png';
import iconAddBookmark from '../../static/bookmarkoff-icon@2x.svg';
import iconRemoveBookmark from '../../static/bookmarkon-icon@2x.svg';
import { toggleBookmark } from '../redux/newsFeed';
import { bookmarkFilter } from '../utils';

export default function Articles() {
  const { slug } = useParams();
  const content = useSelector((state) => state.newsFeed);
  const bookmarkList = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  const revertUrl = slug.replaceAll('_', '/');

  const matchId = content.filter((article) => {
    if (article.id === revertUrl) {
      return article;
    }
  });

  return (
    <Fragment>
      {matchId.map((article) => {
        const datetime = new Date(article.webPublicationDate);
        return (
          <Article key={article.id}>
            <Article.Main>
              <Article.Bookmark
                onClick={() => dispatch(toggleBookmark(article.id))}
              >
                <img src={iconAddBookmark} alt="add" /> Add to bookmark
              </Article.Bookmark>
              <Article.DateTime time={article.webPublicationDate}>
                {datetime.toString()}
              </Article.DateTime>
              <Article.Title>{article.webTitle}</Article.Title>
              <Article.Details>
                {!article.body && article.webTitle}
              </Article.Details>
            </Article.Main>
            <Article.Aside>
              <Article.ImgWrapper>
                {!article.image && (
                  <Article.Media src={logoPeaks} alt={article.webTitle} />
                )}
              </Article.ImgWrapper>
            </Article.Aside>
          </Article>
        );
      })}
    </Fragment>
  );
}
