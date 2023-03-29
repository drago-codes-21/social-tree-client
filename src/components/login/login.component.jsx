import React, { useContext, useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import Input from "../input/input.component";
import { LoginContainer, ButtonsContainer } from "./login.styles";
import { UserContext } from "../../context/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleLogin = () => {
    const creds = { email, password };
    loginUser(creds);
    resetFormFields();
  };

  return (
    <LoginContainer>
      <h2 className="text-2xl">Already have an account?</h2>
      <span className="font-thin">Sign in with your email and password</span>
      <form>
        <Input
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <Input
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={handleLogin}>
            Login
          </Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={handleLogin}>
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </LoginContainer>
  );
};

export default Login;
