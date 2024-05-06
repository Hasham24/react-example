import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscGift } from "react-icons/vsc";
import { FiUser } from "react-icons/fi";
import { AuthDescription, Heading, JoinTypeButton } from "../../../components";
import styles from "./styles.module.css";
const AccountType: React.FC<any> = (props) => {
  const [selectedType, setSelectedType] = useState<number>(0);
  return (
    <div className={styles.container}>
      <Link to={"/signUp"} className={styles.textLink}>
        <p className={styles.alreadyAccount}>
          Already have an account?{" "}
          <button className={styles.signInButton}>Sign In</button>
        </p>
      </Link>
      <div className={styles.body}>
        <Heading title="Join Us!" />
        <AuthDescription title="To begin this journey, tell us what type of account you’d be opening." /> 
        <JoinTypeButton
          Icon={<FiUser color={selectedType === 0 ? "#fff" : "#1565d8"} />}
          title="Individual"
          description={`Personal account to manage all you\n activities.`}
          isSelected={selectedType === 0}
          onClick={() => setSelectedType(0)}
        />
        <JoinTypeButton
          title="Business"
          description={`Own or belong to a company, this is\nfor you.`}
          isSelected={selectedType === 1}
          Icon={<VscGift color={selectedType === 1 ? "#fff" : "#1565d8"} />}
          onClick={() => setSelectedType(1)}
        />
      </div>
    </div>
  );
};
export default AccountType;
