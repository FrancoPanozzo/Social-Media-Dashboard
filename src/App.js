import React from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import ThemeToggleBtn from './components/ThemeToggleBtn';
import MainHeading from './components/MainHeading';
import FollowersCardsList from './components/FollowersCardsList';
import DailyOverview from './components/DailyOverview';

function App() {
  return (
    <Container>
      <Header>
        <MainHeading />
        <ThemeToggleBtn />
      </Header>

      <FollowersCardsList />

      <DailyOverview />
    </Container>
  );
}

export default App;
