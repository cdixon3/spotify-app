import React, { Component } from "react";
import oneLinerJoke from "one-liner-joke";
import spotify from "spotify";

class Joke extends Component {
  constructor(props) {
    super(props);
    // You are forbidden from using local state for this exercise
    this.state = {
      joke: {}
    };
  }

  jokeGenerator = e => {
    e.preventDefault();
    const getRandomJoke = oneLinerJoke.getRandomJoke();
    this.setState({
      joke: getRandomJoke
    });
  };

  spotifySearch = () => {
    const music = spotify.search(
      { type: "track", query: "dancing in the moonlight" },
      function(err, data) {
        if (err) {
          console.log("Error occurred: " + err);
          return;
        }
      }
    );
    console.warn("yeet music", music);
  };

  render() {
    // We will need some props, these props are mapped from the redux store (application state)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Want to hear a joke?</h1>
          <form>
            <button onClick={this.jokeGenerator}>Fetch (get it!) jokes!</button>
          </form>
        </header>
        <div>{this.state.joke.body}</div>
        <div>{this.spotifySearch()}</div>
      </div>
    );
  }
}
// Redux needs to "talk" to the store via some connection, we will need to import that connection
// I talked about mapping the props to the state, here is the where
export default Joke;
