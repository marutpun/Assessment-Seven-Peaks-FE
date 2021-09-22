import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { Link } from 'react-router-dom';
import { Header } from '../components';
import logo from '../../static/Logo_White.png';
import iconSearch from '../../static/search-icon@2x.svg';

export default function HeaderContainer() {
  const [query, setQuery] = useState('');
  const [value] = useDebounce(query, 1000);

  const _handleSubmitForm = (e) => {
    e.preventDefault();
    setQuery('');
  };

  const _handleInput = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Header>
      <Header.Container>
        <Header.Nav>
          <Header.Brand>
            <Link to="/">
              <Header.Img src={logo} alt="logo" />
            </Link>
          </Header.Brand>
          <Header.Search>
            <Header.Form onSubmit={_handleSubmitForm}>
              <Header.Input
                type="text"
                id="searchword"
                value={query}
                onChange={_handleInput}
              />
              <Header.Label htmlFor="searchword">
                <img src={iconSearch} alt="search" />
              </Header.Label>
            </Header.Form>
          </Header.Search>
        </Header.Nav>
      </Header.Container>
    </Header>
  );
}
