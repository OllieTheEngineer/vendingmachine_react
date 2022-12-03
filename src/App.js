import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import VendingMachine from './VendingMachine';
import Popcorn from "./Popcorn";
import PotatoChips from './PotatoChips';
import Granola from './Granola';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/VendingMachine"> Vending Machine </Link>
      <Route exact path="/vendingmachine">
        <VendingMachine />
      </Route>
      <br></br>
      <Link to="/Popcorn"> Popcorn </Link>
      <Route exact path="/popcorn">
        <Popcorn />
      </Route>
      <br></br>
      <Link to="/PotatoChips"> Potato Chips </Link>
      <Route exact path="/potatochips">
        <PotatoChips />
      </Route>
      <br></br>
      <Link to="/Granola"> Granola </Link>
      <Route exact path="/granola">
        <Granola />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
