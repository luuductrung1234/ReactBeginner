import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Register.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/auth-context";

const emailReducer = (previousState, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.inputValue,
      isValid: action.inputValue.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: previousState.value,
      isValid: previousState.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (previousState, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.inputValue,
      isValid: action.inputValue.trim().length > 6,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: previousState.value,
      isValid: previousState.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Register = () => {
  const context = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);
    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
    // optimize useEffect()
    // only run if emailIsValid or passwordIsValid change
  }, [emailIsValid, passwordIsValid, emailState, passwordState]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", inputValue: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", inputValue: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    context.onRegister(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.register}>
      <div className={classes.header}>
        <h1>Register</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            !emailState.isValid ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            !passwordState.isValid ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Register;
