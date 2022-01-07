import React from 'react';  // This was not initially here. Does it need to be?
// import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  )
}

export default App;
