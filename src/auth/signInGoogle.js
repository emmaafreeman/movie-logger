import react from "react";
import { googleAuth } from "./googleAuth"; // !! Make sure to import your functions
// import { Button, Header, Grid } from "semantic-ui-react";

function SignInGoogle() {
  // Here is your submit login for your google auth
  // Don't forget you can also you the googleAuth.signOut() function
  const onSubmitLogin = () => {
    googleAuth.signIn();
  };

  return (
    <>
            <h2 as="h2" textAlign="center">
              Login With Google?
            </h2>
            <button type="submit" color="teal" onClick={onSubmitLogin}>
              Let's Do It!
            </button>
    </>
  );
}

export default SignInGoogle;
