import React from "react";
import { SignInButton } from "@clerk/clerk-react";
import { Button } from "../components/ui/button";

function HomePage() {
  return (
    <div>
      <SignInButton
        mode="modal"
        forceRedirectUrl="/"
      >
        <Button>Sign In</Button>
      </SignInButton>
    </div>
  );
}

export default HomePage;
