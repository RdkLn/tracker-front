import React from 'react';
import Header from './Header';
import Hero from './features/HeroSection/Hero';

const App = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <Hero></Hero>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
