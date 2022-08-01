import React from "react";
import classNames from "classnames";
import "./Button.scss";

function Button({ children, size }) {
  return <button className={classNames("Button", size)}>{children}</button>;
}

Button.defaultprops = {
  size: "medium"
};

export default Button;
