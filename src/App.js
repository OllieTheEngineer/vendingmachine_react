import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import VendingMachine from './VendingMachine';
import Popcorn from "./Popcorn";
import PotatoChips from './PotatoChips';
import Granola from './Granola';
import NavBar from "./NavLink";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Link to="/"> Vending Machine </Link>
      <Link to="/Popcorn"> Popcorn </Link>
      <Link to="/PotatoChips"> Potato Chips </Link>
      <Link to="/Granola"> Granola </Link> */}
      <NavBar/>
      <Route exact path="/">
        <VendingMachine />
      </Route>
      <Route exact path="/Popcorn">
        <Popcorn />
      </Route>
      <Route exact path="/PotatoChips">
        <PotatoChips />
      </Route>
      <Route exact path="/Granola">
        <Granola />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
