import React from 'react';
import './App.css';
import logo from './logo-black-cropped.png';
  
function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src={logo} alt='Rubiks 101'/>
                    </div>
                    <li><a href="#grouptheory">Group Theory</a></li>
                    <li><a href="#rubiksgroup">The Rubiks Cube Group</a></li>
                    <li><a href="#algorithms">Algorithm Breakdown</a></li>
                    <li><a href='#solver'>Creating a Solver</a></li>
                </ul>
  
                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>
  
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Introduction
                        </h1>
                        <p class="text-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Chapter 1: Group Theory
                        </h1>
                        <p class="text-small">
                            <h2> Section 1.1: Groups </h2>
                            <p></p>
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            The Rubiks Cube Group
                        </h1>
                        <p class="text-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Algorithm Breakdowns
                        </h1>
                        <p class="text-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="the-process">
                            Creating a Solver
                        </h1>
                        <p class="text-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    <a
                    href='https://docs.google.com/document/d/1Go4A6d8aoQrc1y19dnPY64wrd7oaPH6H5jzXCufIVj4/edit?usp=sharing'>
                        Resources Used
                    </a>
                </p>
            </footer>
        </div>
    )
}
  
export default App