import LoginHeader from "../components/LoginHeader";
import Register from "../components/Register";
import { useEffect } from "react";

export default function SignupPage() {
  useEffect(() => {
    fetch("/register")
      .then((r) => r.json())
      .then((register) => console.log(register));
  }, []);
  
  return (
    <div
      className="flex items-center justify-center wrapper"
      data-aos="fade-right"
      data-aos-offset="400"
    >
      <div className="bg-white shadow-lg rounded-lg p-6 ">
        <LoginHeader
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
        />
        <Register />
      </div>
    </div>
  );
}
