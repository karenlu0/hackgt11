import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import Login from './Login'; // Import the Login component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to set login status
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />; // Show login page if not logged in
  }

  // Main application content
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Buzz Buzzaar</h1>
        </div>
      </header>
      <main className="App-main">
        <aside className="Sidebar">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#goods">Goods + Services</a></li>
            <li><a href="#notifications">Notifications</a></li>
            <li><a href="#chats">Chats</a></li>
            <li><a href="#buddys">BuzzBuddys</a></li>
          </ul>
          <button className="add-post-button">Add a Post</button>
        </aside>
        <section className="Community-posts">
          <h2>Community Feed</h2>
          <div className="post">
            <h3>Join us for a study group!</h3>
            <p>Date: Saturday, 10 AM</p>
            <p>Details: Looking for students to discuss CS projects.</p>
          </div>
          <div className="post">
            <h3>Ride Share Available</h3>
            <p>Destination: Hartsfield-Jackson Airport</p>
            <p>Contact: DM me if interested!</p>
          </div>
          <div className="post">
            <h3>Free Textbooks</h3>
            <p>Available for pickup: Intro to Algorithms, Data Structures</p>
          </div>
        </section>
      </main>
      <footer className="App-footer">
        <p>© 2024 Georgia Tech Neighborhood</p>
      </footer>
    </div>
  );
}

export default App;
