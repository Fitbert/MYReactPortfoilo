  import { useState } from 'react';
  // import reactLogo from './assets/react.svg';
  // import viteLogo from './assets/vite.svg';
  import './App.css';
  // Remove the unused import statement for 'React'
  import React from 'react';

  const App: React.FC = () =>{
    return (
      <>
        <header className='bg-yellow-400 min-w-full'>
          <h1 className='text-yellow-400'>My React Portfolio</h1>
          <nav>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <div></div>
        <main>
          <section id="about">
            <h2>About Me</h2>
            <p>
              I am a web developer with a passion for learning new technologies. I am currently learning React and Vite.
            </p>
            {/* <img src={reactLogo} alt="React Logo" />
            <img src={viteLogo} alt="Vite Logo" /> */}
          </section>
          <section id="projects">
            <h2>Projects</h2>
            <ul>
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
            </ul>
          </section>
          <section id="contact">
            <h2>Contact</h2>
            <p>Email:</p>
          </section>
        </main>
      </>
    );
  }

  export default App;

