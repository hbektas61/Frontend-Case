import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <SignUp appearance={{
    elements:{
      rootBox:{
        position: "relative",
        left: "50%",
        transform: "translate(-50%)"
      }
    }
  }}/>;
}