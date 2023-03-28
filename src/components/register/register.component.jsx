import React, { useContext, useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import Input from "../input/input.component";
import { UserContext } from "../../context/user.context";
import { RegisterContainer } from "./register.styles";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  profile: "",
};

const Register = () => {
  const { registerUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, firstName, lastName, profile } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const handleRegister = () => {
    const creds = { email, password };
    registerUser(creds);
    resetFormFields();
  };

  return (
    <RegisterContainer>
      <div className="grid grid-cols-2 gap-5 mr-auto">
        <Input
          label="First Name"
          type="text"
          required
          onChange={handleChange}
          name="firstName"
          value={firstName}
        />
        <Input
          label="Last Name"
          type="text"
          required
          onChange={handleChange}
          name="lastName"
          value={lastName}
        />
      </div>

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
      <Input
        label="Profile"
        type="text"
        required
        onChange={handleChange}
        name="profile"
        value={profile}
      />
      <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={handleRegister}>
        Register
      </Button>
    </RegisterContainer>
  );
};

export default Register;
