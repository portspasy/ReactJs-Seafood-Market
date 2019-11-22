import React from "react";
import AddFishForm from "./AddFishForm";



class Iventroy extends React.Component {
  render() {
    return (
      <div>
        <h2>Iventory</h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Iventroy;
