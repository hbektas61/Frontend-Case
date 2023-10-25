import { SignUp as SignUpComp} from "@clerk/nextjs";
 
export default function SignUp() {
  return <SignUpComp appearance={{
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