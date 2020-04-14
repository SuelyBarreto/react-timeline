import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1> 
      </header>
      <main className="App-main">
        <Timeline events={ timelineData.events } />
      </main>
    </div>
  );
}

export default App; // line 14 go check project description 
