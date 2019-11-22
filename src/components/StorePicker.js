import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   // use this for any of the Methode
  //   this.goToStore = this.goToStore.bind(this);
  // }
  // Create a Methode
  goToStore(e) {
    e.preventDefault();
    // get the text from the input box
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    // transition from / to /store/:storeId
    // this.context.history.push(`/store/${storeId}`);
    
    // this.props.history.push('/some/path');
    console.log(this);
    console.log(this.props);
    console.log(this.context.history);
    this.context.history.replace(`/store/${storeId}`);
    // console.log(this.context.router.transitionTo(`/store/${storeId}`));
  }

  render() {
    return (
      // only can return one perent element or if have more than two, will show an error!
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          placeholder="Store Name"
          required
          defaultValue={getFunName()}
          ref={(input)=> {this.storeInput = input} }
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  history: React.PropTypes.object
}

export default StorePicker;
