import LoginHeader from "../components/LoginHeader";  
import Login from "../components/Login";

export default function LoginPage () {
    return(
        <div>
            <LoginHeader
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Register"
                linkUrl="/Register"
                />
            <Login/>
        </div>
    );
};