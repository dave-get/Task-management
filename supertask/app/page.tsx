// import Signup from "@/components/form/signup";
import Signin from "@/components/form/signin";
import Signinpage from "@/lib/signin/signinpage";
import SignupPage from "@/lib/signup/signupPage";

export default function Home() {
  return (
    <div>
      {/* <SignupPage /> */}
      <Signinpage />
    </div>
  );
}
