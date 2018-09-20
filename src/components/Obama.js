import React from "react";
import { Link } from "react-router-dom";

export default class Obama extends React.Component {
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
          President Barack Obama Exclusive 7" Action Figure "Purple Lightsaber"
        </h1>
        <p style={{ width: "50%" }}>
          President Barack Obama Exclusive 7" Action Figure "Purple Lightsaber"
          VERY HARD TO FIND AND NOT SOLD IN STORES. LIMITED EDITION AND NO
          LONGER IN PRODUCTION! THIS IS A MUST HAVE AND MAKES A GREAT GIFT FOR
          ANY OBAMA FAN AND ANY NOT SO......OBAMA FAN. BRAND NEW IN MINT
          CONDITION SELAED IN THE ORIGINAL PACKAGE. VERY COOL! THERE ARE 3
          DIFFERENT FIGURES IN THIS SERIES: SUPER-OBAMA , JEDI OBAMA AND
          BASEBALL OBAMA. LOOK FOR ALL 3 ON AMAZON....ALSO LOOK FOR THE HARD TO
          FIND VARIENTS!
        </p>
        <div
          style={{
            height: 500,
            width: 500,
            backgroundImage: "url(/images/obama.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
        {this.state.price ? <h2>$479.89</h2> : <div />}
        <button onClick={() => this.setState({ price: true })}>
          Reveal Price
        </button>
        <Link to="/screwdriver">
          <button>Move On</button>
        </Link>
      </div>
    );
  }
}
