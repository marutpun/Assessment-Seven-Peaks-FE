import { useEffect } from 'react';
import LoadingSpinner from '../components/Loading';
import { useNewsFeed } from '../store/newsFeed';
import logo from '../assets/images/Logo_White.png';

export default function FeedContainer() {
  const results = useNewsFeed((state) => state.results);
  const isLoading = useNewsFeed((state) => state.isLoading);

  const getNews = useNewsFeed((state) => state.getNews);
  useEffect(() => {
    getNews();
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="container">
      <div className="section">
        <div className="row row-cols-1 row-cols-md-4">
          {results.map(function (news) {
            return (
              <div key={news.id} className="col">
                <a className="FeedCard" href={news.webUrl} target="_blank">
                  <div className="FeedCard__inner">
                    <figure className="FeedCard__body">
                      <img src={logo} alt={news.webTitle} />
                      <figcaption className="FeedCard__overlay">
                        <h3 className="FeedCard__title">{news.webTitle}</h3>
                      </figcaption>
                    </figure>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
