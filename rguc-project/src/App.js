import React from 'react';
import './App.css';

import MyCard from "./components/MyCard";
import FollowersCards from "./components/FollowersCards";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyCard />
        <h2>Meet Tauan's Followers:</h2>
        <FollowersCards />
      </div>
    );
  }
}

export default App;
