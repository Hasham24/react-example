import React from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "./styles.module.css";
import {
  Button,
  SocialButton,
  CheckBox,
  Header,
  Heading,
  TextInput,
} from "../../components";

const SignUP: React.FC<any> = (props) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`The name you entered was: `);
  };

  return (
    <div className={styles.container}>
      <Header title="Personal Info." step={1} />
      <div className={styles.body}>
        <Heading title="Register Individual Account!" />
        <p className={styles.description}>
          For the purpose of industry regulation, your
          <br />
          details are required.
        </p>
        <form onSubmit={handleSubmit}>
          <TextInput
            label={"Your fullName*"}
            type={"text"}
            id={"fullName"}
            name={"fullName"}
            placeholder={"Invictus Innocent"}
          />
          <TextInput
            label={"Email address*"}
            type={"text"}
            id={"email"}
            name={"email"}
            placeholder={"Enter email address"}
          />
          <TextInput
            label={"Create password*"}
            type={"password"}
            id={"password"}
            name={"password"}
            placeholder={"Enter Password"}
          />
          <CheckBox />
          <Button type="submit" title="Register Account" />
        </form>
        <div className={styles.orContainer}>
          <hr color={"#F5F5F5"} className={styles.line} />
          <label className={styles.or}>OR</label>
          <hr color={"#F5F5F5"} className={styles.line} />
        </div>
        <SocialButton
          title="Register with Google"
          Icon={<FcGoogle className={styles.icon} />}
        />
      </div>
    </div>
  );
};
export default SignUP;
