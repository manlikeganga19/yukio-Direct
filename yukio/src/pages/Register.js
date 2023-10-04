import Footer from "../components/Footer";
import LoginHeader from "../components/LoginHeader";
import Register from "../components/Register";

export default function SignupPage() {
  return (
    <div
      className="flex items-center justify-center h-screen ml-lg:40 wrapper"
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
