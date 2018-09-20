import React from "react";
import { Link } from "react-router-dom";

export default class Michael extends React.Component {
  constructor() {
    super();
    this.state = {
      price: false
    };
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1>
          1986-87 fleer #57 MICHAEL JORDAN chicago bulls authentic rookie card
          BGS BCCG 10 Graded Card
        </h1>
        <p style={{ width: "50%" }}>Only one left in stock...</p>
        <div
          style={{
            height: 500,
            width: 500,
            backgroundImage: "url(/images/michael.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
        {this.state.price ? <h2>$4,279.99</h2> : <div />}
        <button onClick={() => this.setState({ price: true })}>
          Reveal Price
        </button>
        <Link to="/harp">
          <button>Move On</button>
        </Link>
      </div>
    );
  }
}
