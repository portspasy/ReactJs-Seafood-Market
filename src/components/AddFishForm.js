import React from "react";

class AddFishForm extends React.Component {
  // This methode
  createFish(e) {
    e.preventDefault();
    console.log(e);
    console.log(this);
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    };
    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render() {
    return (
      // use refs to get the value from the Form!!! (see this!!!)
      <form
        ref={input => {
          this.fishForm = input;
        }}
        className="fish-edit"
        onSubmit={e => this.createFish(e)}
      >
        <input
          type="text"
          placeholder="Fish Name"
          ref={input => {
            this.name = input;
          }}
        />
        <input
          type="text"
          placeholder="Fish Price"
          ref={input => {
            this.price = input;
          }}
        />
        <select
          ref={input => {
            this.status = input;
          }}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          type="text"
          placeholder="Fish Desc."
          ref={input => {
            this.desc = input;
          }}
        />
        <input
          type="text"
          placeholder="Fish Image"
          ref={input => {
            this.image = input;
          }}
        />
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}

export default AddFishForm;
