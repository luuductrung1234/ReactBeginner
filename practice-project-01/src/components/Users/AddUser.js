import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../../shared/Card";
import Button from "../../shared/Button";
import ErrorModal from "../../shared/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [userNameValid, setUsernameValid] = useState(true);
  const [age, setAge] = useState("");
  const [ageValid, setAgeValid] = useState(true);
  const [error, setError] = useState(null);

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
    setUsernameValid(validateUsername(event.target.value));
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
    setAgeValid(validateAge(event.target.value));
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!validateUsername(username)) {
      setError({
        title: "Username is required",
        message: "Please enter username",
      });
      return;
    }
    if (!validateAge(age)) {
      setError({
        title: "Age is invalid",
        message: "Please enter age (age > 0)",
      });
      return;
    }
    if (props.onNewUser !== undefined)
      props.onNewUser({
        name: username,
        age: age,
      });
    reset();
  };

  const validateUsername = (usernameData) => {
    let isValid = usernameData !== undefined && usernameData.trim().length > 0;
    setUsernameValid(isValid);
    return isValid;
  };

  const validateAge = (ageData) => {
    let isValid =
      ageData !== undefined &&
      !Number.isNaN(ageData) &&
      Number.parseInt(ageData) > 0;
    setAgeValid(isValid);
    return isValid;
  };

  const reset = () => {
    setUsername("");
    setAge("");
  };

  const errorModalCloseHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error != null && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorModalCloseHandler}
        ></ErrorModal>
      )}
      <Card className={styles["input"]}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
            className={`${!userNameValid && styles["invalid"]}`}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
            className={`${!ageValid && styles["invalid"]}`}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
