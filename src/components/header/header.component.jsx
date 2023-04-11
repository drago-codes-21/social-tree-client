import React, { useContext } from "react";
import { links } from "../../utils/constants.util";
import { Link } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { HeaderContainer } from "./header.styles";
import { UserContext } from "../../context/user.context";

const Header = () => {
  const { logout, currentUser } = useContext(UserContext);
  return (
    <HeaderContainer>
      <div className="header-center">
        <div className="header-logo">
          <Link to="/">
            <h1 className="text-2xl">🚀👍🐲🍿☑️</h1>
          </Link>
        </div>
        <ul className="header-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={`${url}`}>{text}</Link>
              </li>
            );
          })}
        </ul>
        {currentUser === null ? (
          <Link to="/auth">
            <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button">
              {" "}
              Login
            </Button>
          </Link>
        ) : (
          <Link to="/auth">
            <Button
              buttonType={BUTTON_TYPE_CLASSES.google}
              type="button"
              onClick={() => logout()}
            >
              {" "}
              Logout
            </Button>
          </Link>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
