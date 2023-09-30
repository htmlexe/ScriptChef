import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const SignIn = () => {
    const user = useContext(AuthContext);
    console.log(user)

    return <div>Sign In</div>
}

export default SignIn;