import LoginHeader from "../components/LoginHeader";
import Login from "../components/Login";
import Footer from "../components/Footer";

export default function LoginPage() {
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
