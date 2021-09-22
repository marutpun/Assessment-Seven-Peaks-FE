import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import NewsFeedContainer from './containers/NewsFeedContainer';
import { store } from './redux/newsFeed';
import './styles/app.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NewsFeedContainer />
      </Router>
    </Provider>
  );
}

export default App;
