import React, { Component } from 'react';
import PropTypes from "prop-types"
import Home from "./Home"

const fakeDatabase = {
  "Heisenberg": [
    "8am - Chemistry classes at school",
    "12:30pm - Meet Jesse for lunch",
    "15pm - Meet Gus at the Pollos Hermanos",
    "20pm - Dinner by the pool with Hank and Marie"
  ],
  "GusFring": [
    "8am - Meeting with the DEA",
    "15pm - Meet Walter at the Pollos Hermanos",
  ]
}

class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
  }

  render() {
    const { isLoggedIn, username } = this.props

    return (
      <div className="App">
        {
          isLoggedIn
            ? <Home username={username} tasks={fakeDatabase[username]} />
            : <p>Hello, visitor. Sign in to continue.</p>
        }
      </div>
    );
  }
}

export default App;
