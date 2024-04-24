import React, { useState } from "react";
import { VscGift } from "react-icons/vsc";
import { FiUser } from "react-icons/fi";
import styles from "./styles.module.css";
import { JoinTypeButton } from "../../components";

const AccountType: React.FC<any> = (props) => {
  const [selectedType, setSelectedType] = useState<number>(1);
  return (
    <div className={styles.container}>
      <p className={styles.alreadyAccount}>
        Already have an account?{" "}
        <button
          className={styles.signInButton}
          onClick={() => console.log("first")}
        >
          Sign In
        </button>
      </p>
      <div className={styles.body}>
        <p className={styles.joinUs}>Join Us!</p>
        <p className={styles.description}>
          To begin this journey, tell us what type of
          <br />
          account you’d be opening.
        </p>
        <JoinTypeButton
          Icon={<FiUser color={selectedType === 0 ? "#fff" : "#1565d8"} />}
          title="Individual"
          description={`Personal account to manage all you\n activities.`}
          isSelected={selectedType === 0}
          onClick={()=>setSelectedType(0)}
        />
        <JoinTypeButton
          title="Business"
          description={`Own or belong to a company, this is\nfor you.`}
          isSelected={selectedType === 1}
          Icon={<VscGift color={selectedType === 1 ? "#fff" : "#1565d8"} />}
          onClick={()=>setSelectedType(1)}
        />
      </div>
    </div>
  );
};
export default AccountType;
