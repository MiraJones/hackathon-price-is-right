import React from "react";
import { Link } from "react-router-dom";

export default class Echo extends React.Component {
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
          All-new Echo Dot (3rd Gen) - Smart speaker with Alexa - Heather Gray
        </h1>
        <p style={{ width: "50%" }}>
          Echo Dot is our most popular voice-controlled speaker, now with
          improved sound and a new design. Ask Alexa to play music, answer
          questions, read the news, check the weather, set alarms, control
          compatible smart home devices, and more. Stream songs from Amazon
          Music, Spotify, Pandora, and others through the improved speaker for
          richer and louder sound. Call and message almost anyone hands-free.
          Instantly drop in on other rooms in your home or make an announcement
          to every room with a compatible Echo device. Alexa is always getting
          smarter and adding new skills like tracking fitness, playing games,
          and more. Can hear you from across the room. And with compatible Echo
          devices in different rooms, you can fill your whole home with music.
          You can also connect to your own speakers over Bluetooth or with a 3.5
          mm audio cable. Use your voice to turn on lights, adjust thermostats,
          lock doors, find TV shows, and more with compatible connected devices.
        </p>
        <div
          style={{
            height: 500,
            width: 500,
            backgroundImage: "url(/images/echo.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
        {this.state.price ? <h2>$49.99</h2> : <div />}
        <button onClick={() => this.setState({ price: true })}>
          Reveal Price
        </button>
        <Link to="/dell">
          <button>Move On</button>
        </Link>
      </div>
    );
  }
}
