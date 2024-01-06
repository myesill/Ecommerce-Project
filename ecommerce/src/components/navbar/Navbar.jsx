import React from "react";

import NavbarRight from "./navbarItems/NavbarRight";
import YNavbarLeft from "./navbarItems/YNavbarLeft";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-5">
      <YNavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
