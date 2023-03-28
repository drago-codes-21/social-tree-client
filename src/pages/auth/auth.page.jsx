import Login from "../../components/login/login.component";
// import Register from "../../components/register/register.component";
import { AuthContainer } from "./auth.styles";

const AuthPage = () => {
  return (
    <AuthContainer>
      <Login />
      {/* <Register /> */}
    </AuthContainer>
  );
};

export default AuthPage;
