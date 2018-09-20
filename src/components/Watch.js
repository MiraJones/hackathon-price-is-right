import React from "react";
import { Link } from "react-router-dom";

export default class Watch extends React.Component {
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
          Amazfit Bip Smartwatch by Huami with All-day Heart Rate and Activity
          Tracking, Sleep Monitoring, GPS, Ultra-Long Battery Life, Bluetooth,
          US Service and Warranty (A1608 Black)
        </h1>
        <p style={{ width: "50%" }} />
        <div
          style={{
            height: 500,
            width: 500,
            backgroundImage: "url(/images/watch.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
        {this.state.price ? <h2>$79.99</h2> : <div />}
        <button onClick={() => this.setState({ price: true })}>
          Reveal Price
        </button>
        <Link to="/">
          <button>Move On</button>
        </Link>
      </div>
    );
  }
}
