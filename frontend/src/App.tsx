import { Button } from "./components/ui/button"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

function App() {

  return (
    <>
      {/* <h1 className="text-red-400 text-5xl">Hello </h1>
      <Button variant={"outline"}>this is a button </Button> */}
      <header>
      <SignedOut>
        <SignInButton>
          <Button >Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>


    </>
  )


}

export default App
