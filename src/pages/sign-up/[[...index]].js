import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <SignUp appearance={{
    elements:{
      rootBox:{
        position: 'fixed;',
        left: '50%;',
        transform: 'translate(-50%,-50%);',
        top: '50%;'
      }
    }
  }}/>;
}