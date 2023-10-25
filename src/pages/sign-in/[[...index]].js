import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <SignIn appearance={{
    elements:{
      rootBox:{
        position: "relative",
        left: "50%",
        transform: "translate(-50%)"
      }
    }
  }}/>;
}
