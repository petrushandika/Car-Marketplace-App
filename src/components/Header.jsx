import React from "react";
import logo from "../assets/logo.png";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

function Header() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="w-28"
        />
        <h1 className="text-xl font-semibold">Velocia</h1>
      </div>

      <ul className="hidden md:flex gap-16">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Home
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Search
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          New
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Preowned
        </li>
      </ul>

      <div className="flex items-center gap-5">
        {isSignedIn && <UserButton />}
        <Link to={"/profile"}>
          <Button>Submit Listing</Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
