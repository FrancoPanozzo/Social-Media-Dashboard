import React from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import ThemeToggleBtn from './components/ThemeToggleBtn';
import MainHeading from './components/MainHeading';
import FollowersCardsList from './components/FollowersCardsList';

function App() {
  return (
    <Container>
      <Header>
        <MainHeading />
        <ThemeToggleBtn />
      </Header>
      <FollowersCardsList />
    </Container>
  );
}

export default App;
