import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from '../components';
import { Route, Switch } from 'react-router-dom';
import { Home, Articles, Bookmark, Search } from '../pages';
import { getNews } from '../redux/newsFeed';

export default function NewsFeedContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/article/:slug" component={Articles} />
        <Route path="/bookmark/" component={Bookmark} />
        <Route path="/search/:query" component={Search} />
      </Switch>
    </Layout>
  );
}
