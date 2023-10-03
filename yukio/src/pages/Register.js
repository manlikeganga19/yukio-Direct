import LoginHeader from "../components/LoginHeader";
import Register from "../components/Register";

export default function SignupPage() {
  return (
    <>
      <LoginHeader
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <Register />
    </>
  );
}
