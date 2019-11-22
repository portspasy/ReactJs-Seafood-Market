import React from "react";

import Header from "./Header";
import Order from "./Order";
import Iventory from "./Iventory";
import Fish from "./Fish";

// Load the data we need to State!!! (see carefully!)
import sampleFishes from "../sample-fishes";

class App extends React.Component {
  // read more for this !! and super() and state!!!
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    // this get initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }

  // this methode
  addFish(fish) {
    // update our state
    const fishes = { ...this.state.fishes };

    // add in our new fish
    const timestamp = Date.now(); // this will be unic
    fishes[`fish-${timestamp}`] = fish;

    // set state
    this.setState({ fishes: fishes });
  }

  loadSamples() {
    // set state
    this.setState({ fishes: sampleFishes });
  }

  addToOrder(key) {
    console.log(key);
    // take a copy of our state
    const order = { ...this.state.order };
    //update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    // update our state
    this.setState({ order: order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {/* To loop over the object!!! See the index={key} as well */}
            {
              Object
              .keys(this.state.fishes)
              .map(key => (<Fish key={key} index={key} details={this.state.fishes[key]}  addToOrder={this.addToOrder}/>))
            }
            {/* End To loop over the object!!! */}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Iventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    );
  }
}

export default App;
