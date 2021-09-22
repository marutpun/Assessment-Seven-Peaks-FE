import React from 'react';
import { useSelector } from 'react-redux';
import { Favorite } from '../components';
import imagePeaks from '../../static/Logo_White.png';
import { bookmarkFilter } from '../utils';

export default function Bookmark() {
  const bookmark = useSelector((state) => state.bookmark);
  const newsFeed = useSelector((state) => state.newsFeed);

  const filteredItem = bookmarkFilter(newsFeed, bookmark);

  return (
    <Favorite>
      <Favorite.Heading>All bookmark</Favorite.Heading>
      {bookmark.length > 0 ? (
        <Favorite.Wrapper>
          {filteredItem.map((bookmark) => (
            <Favorite.Cell key={bookmark.id}>
              <Favorite.Card>
                <Favorite.Body>
                  {!bookmark.image && (
                    <Favorite.Image src={imagePeaks} alt={bookmark.webTitle} />
                  )}
                  <Favorite.Overlay
                    to={`article/${bookmark.id.replaceAll('/', '_')}`}
                  >
                    <h3>{bookmark.webTitle}</h3>
                  </Favorite.Overlay>
                </Favorite.Body>
              </Favorite.Card>
            </Favorite.Cell>
          ))}
        </Favorite.Wrapper>
      ) : (
        <p>There is no bookmark.</p>
      )}
    </Favorite>
  );
}
