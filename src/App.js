import React from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import ThemeToggleBtn from './components/ThemeToggleBtn';
import MainHeading from './components/MainHeading';

function App() {
  return (
    <Container>
      <Header>
        <MainHeading />
        <ThemeToggleBtn />
      </Header>
    </Container>
  );
}

export default App;
