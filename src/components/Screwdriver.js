import React from "react";
import { Link } from "react-router-dom";

export default class Screwdriver extends React.Component {
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
        <h1>BLACK+DECKER LDX120C 20V MAX Lithium Ion Drill / Driver</h1>
        <p style={{ width: "50%" }} />
        <div
          style={{
            height: 500,
            width: 500,
            backgroundImage: "url(/images/screwdriver.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
        {this.state.price ? <h2>$34</h2> : <div />}
        <button onClick={() => this.setState({ price: true })}>
          Reveal Price
        </button>
        <Link to="/printer">
          <button>Move On</button>
        </Link>
      </div>
    );
  }
}
