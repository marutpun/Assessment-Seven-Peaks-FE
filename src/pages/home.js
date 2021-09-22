import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Feed, LoadingSpinner } from '../components';
import imagePeaks from '../../static/Logo_White.png';
import iconBookmark from '../../static/bookmarkon-icon@2x.svg';
import { selectionFilter } from '../utils';

export default function Home() {
  const content = useSelector((state) => state.newsFeed || []);

  const isLoading = useSelector((state) => state.isLoading);

  const groupedNews = selectionFilter(content);

  return (
    <Fragment>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Fragment>
          <Feed>
            <Feed.Header>
              <Feed.Heading>All top stories</Feed.Heading>
              <Feed.Tools>
                <Feed.BtnBookmark>
                  <img src={iconBookmark} /> View bookmark
                </Feed.BtnBookmark>
                <select className="Feed_select">
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                  <option value="mostview">Most popular</option>
                </select>
              </Feed.Tools>
            </Feed.Header>
            <Feed.Wrapper>
              {content.map((item) => (
                <Feed.Cell key={item.id}>
                  <Feed.Card>
                    <Feed.CardBody>
                      {!item.image && (
                        <Feed.Image src={imagePeaks} alt={item.webTitle} />
                      )}
                      <Feed.Overlay
                        to={`article/${item.id.replaceAll('/', '_')}`}
                      >
                        <h3>{item.webTitle}</h3>
                      </Feed.Overlay>
                    </Feed.CardBody>
                  </Feed.Card>
                </Feed.Cell>
              ))}
            </Feed.Wrapper>
          </Feed>
          <Feed>
            {groupedNews.news.map(
              (item) =>
                item.data.length > 0 && (
                  <Feed.Section key={item.id}>
                    <Feed.Heading>{item.title}</Feed.Heading>
                    <Feed.Wrapper>
                      {item.data.map((singleCell) => (
                        <Feed.Cell key={singleCell.id}>
                          <Feed.Card>
                            <Feed.CardBody>
                              {!singleCell.image && (
                                <Feed.Image
                                  src={imagePeaks}
                                  alt={singleCell.webTitle}
                                />
                              )}
                              <Feed.Overlay
                                to={`article/${singleCell.id.replaceAll(
                                  '/',
                                  '_'
                                )}`}
                              >
                                <h3>{singleCell.webTitle}</h3>
                              </Feed.Overlay>
                            </Feed.CardBody>
                          </Feed.Card>
                        </Feed.Cell>
                      ))}
                    </Feed.Wrapper>
                  </Feed.Section>
                )
            )}
          </Feed>
        </Fragment>
      )}
    </Fragment>
  );
}
