import React, { Component } from "react";
import "./App.css";
import routes from "./routes";

const contestants = [
  { contestant1: "" },
  { contestant2: "" },
  { contestant3: "" },
  { contestant4: "" },
  { contestant5: "" },
  { contestant6: "" },
  { contestant7: "" },
  { contestant8: "" }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      contestant1: "",
      contestant1Guess: "",
      contestant2: "",
      contestant2Guess: "",

      contestant3: "",
      contestant3Guess: "",

      contestant4: "",
      contestant4Guess: "",

      contestant5: "",
      contestant5Guess: "",

      contestant6: "",
      contestant6Guess: "",

      contestant7: "",
      contestant7Guess: "",

      contestant8: "",
      contestant8Guess: ""
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Price is Right!!!</h1>
        {routes}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {contestants.map((val, i) => {
            let contestantNum = "contestant" + i;
            let contestantGuessNum = "contestant" + i + "Guess";
            return (
              <div>
                <input
                  placeholder="contestant"
                  onChange={e =>
                    this.setState({ [contestantNum]: e.target.value })
                  }
                  value={this.state[contestantNum]}
                />
                <input
                  placeholder="guess"
                  onChange={e =>
                    this.setState({ [contestantGuessNum]: e.target.value })
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
