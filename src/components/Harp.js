import React from "react";
import { Link } from "react-router-dom";

export default class Harp extends React.Component {
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
          (USED) Rees Harps SE - SPECIAL EDITION Fullsicle Harp, SOLID CHERRY
          WOOD, 26 String, 33" Tall, Concert Quality Rees Levers, Made in USA,
          includes MelBay instruction book
        </h1>
        <p style={{ width: "50%" }}>Only one left in stock...</p>
        <div
          style={{
            height: 500,
            width: 500,
            backgroundImage: "url(/images/harp.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
        {this.state.price ? <h2>$896.72</h2> : <div />}
        <button onClick={() => this.setState({ price: true })}>
          Reveal Price
        </button>
        <Link to="/obama">
          <button>Move On</button>
        </Link>
      </div>
    );
  }
}
