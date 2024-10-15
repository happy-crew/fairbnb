import React from "react";
import NavSearch from "./NavSearch";
import LinksDropDown from "./LinksDropDown";

import Logo from "./Logo";
import ModeToggle from "./DarkerMode";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <ModeToggle />
          <LinksDropDown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
