import React from "react";
import { Link } from "react-router-dom";

export default class Printer extends React.Component {
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
          Epson Expression ET-2650 EcoTank Wireless Color All-in-One Small
          Business Supertank Printer with Scanner and Copier
        </h1>
        <p style={{ width: "50%" }}>
          Cartridge-free printing — comes with up to 2 years of ink in the box
          (1) Includes enough ink to print up to 4,000 pages black/6,500 color
          (2) — equivalent to about 20 ink cartridge sets (3) Save up to 80
          percent on ink with low-cost replacement bottles (4) — plus
          easy-to-fill, supersized ink tanks Built-in wireless, plus Wi-Fi
          Direct (7) — easily print from iPad, iPhone, Android tablets and
          smartphones (5); print wirelessly without a network Unbeatable
          combination of value and convenience — the freedom to print anything
          you want in color, without worry Small Business printer - Compact but
          powerful printer can be used for daily printing
        </p>
        <div
          style={{
            height: 500,
            width: 500,
            backgroundImage: "url(/images/printer.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
        {this.state.price ? <h2>$199.99</h2> : <div />}
        <button onClick={() => this.setState({ price: true })}>
          Reveal Price
        </button>
        <Link to="/watch">
          <button>Move On</button>
        </Link>
      </div>
    );
  }
}
