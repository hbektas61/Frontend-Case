import { SignIn as SignInComp} from "@clerk/nextjs";
 
export default function SignIn() {
  return <SignInComp appearance={{
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
