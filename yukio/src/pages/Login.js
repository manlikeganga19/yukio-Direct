import LoginHeader from "../components/LoginHeader";
import Login from "../components/Login";
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    fetch("/login")
      .then((r) => r.json())
      .then((login) => console.log(login));
  }, []);
  
  return (
    <div className="wrapper " data-aos="fade-left" data-aos-offset="400">
      <div className="bg-white shadow-lg rounded-lg p-6 ">
        <LoginHeader
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Register"
          linkUrl="/Register"
        />
        <Login />
      </div>
    </div>
  );
}
