import React from 'react';

import Header from './components/Header';
import PostList from './components/PostList';

import './App.css';

function App() {
  return (
    <div id='wrap'>
      <Header />
      <PostList />
    </div>
  );
}

export default App;
