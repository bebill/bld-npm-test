import React from "react";
import { render } from "react-dom";
import { Counter } from "./lib/Counter";

const App = () => (
  <div>
    <h1>Hello React</h1>
    <Counter />
  </div>
);

render(<App />, document.getElementById("root"));
