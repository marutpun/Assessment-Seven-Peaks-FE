import React from 'react';
import { useParams } from 'react-router';

export default function Search() {
  const { query } = useParams();
  return (
    <div>
      <h2>Search '{query}'</h2>
    </div>
  );
}
