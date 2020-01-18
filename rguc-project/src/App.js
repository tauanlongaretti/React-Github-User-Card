import React from 'react';
import './App.css';

import Header from "./component/Header"
import TauanCard from "./components/TauanCard";

const cardList = [];

class App extends React.Component {
  state = {
    cardName: "",
    cardLocation: "",
    cardBio: "",
    cardId: ""
  }

  addNewCard = (newCardName, newCardLocation, newCardBio) => {
    const newState = {
      ...this.state, cardName: [...this.state.cardName, { name: newCardName, location: newCardLocation, bio: newCardBio }]
    }
    .this.setState(newState);
  }
  
  render() {
    return (
      <div className="App">
        <Tauan />
      </div>
    );
  }
}

export default App;
