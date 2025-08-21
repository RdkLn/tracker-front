import React from 'react';
import Header from './Header';
import Hero from './features/HeroSection/Hero';
import WorkoutCalendar from './features/WorkoutCalendar/WorkoutCalendar';
import { WorkoutHistory } from './features/WorkoutHistory/WorkoutHistory';

const App = () => {
  return (
    <div>
      <Header></Header>
      <main className="mx-5">
        <Hero></Hero>
        <WorkoutCalendar />
        <WorkoutHistory />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
