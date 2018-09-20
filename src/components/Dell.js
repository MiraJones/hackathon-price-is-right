import React from "react";
import { Link } from "react-router-dom";

export default class Dell extends React.Component {
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
          Dell Gaming Laptop - 15" FHD, 8th Gen Intel Core i7-8750H CPU, 16GB
          RAM, 256GB SSD+1TB HDD, NVIDIA GeForce GTX 1050TI, Windows 10 Home,
          Black - G3579-7989BLK-PUS
        </h1>
        <p style={{ width: "50%" }}>
          8th Generation Intel Core i7-8750H Processor (6-Core, 9MB Cache, up to
          3.9GHz w/Turbo Boost) 16GB 2666MHz DDR4 up to 32GB 256 GB (SSD) Boot +
          1 TB 5400 RPM SATA HDD Storage , No ODD 15.6-inch FHD (1920 x 1080)
          IPS Anti-Glare, LED-Backlit Display Be more productive. Windows 10 is
          the best for bringing ideas forward and getting things done
        </p>
        <div
          style={{
            height: 500,
            width: 500,
            backgroundImage: "url(/images/dell.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
        {this.state.price ? <h2>$979.99</h2> : <div />}
        <button onClick={() => this.setState({ price: true })}>
          Reveal Price
        </button>
        <Link to="/michael">
          <button>Move On</button>
        </Link>
      </div>
    );
  }
}
