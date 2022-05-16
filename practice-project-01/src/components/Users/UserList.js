import Card from "../../shared/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles["users"]}>
      <ul>
        {(props.users === undefined || props.users.length === 0) && (
          <p className={styles["users__message"]}>no user found.</p>
        )}
        {props.users.length > 0 &&
          props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
      </ul>
    </Card>
  );
};

export default UserList;
