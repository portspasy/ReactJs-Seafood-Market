// Let's Go Code!
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Match, Miss } from "react-router";

//for CSS Style
import "./css/style.css";
import App from "./components/App";
import StorePicker from "./components/StorePicker";
import NotFound404 from "./components/404";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        {/* <Match pattern="/store" component={App} /> */}
        <Miss component={NotFound404} />
      </div>
    </BrowserRouter>
  );
};

// render(<StorePicker/>, document.querySelector('#main'));
render(<Root />, document.querySelector("#main"));
