import React, { InputHTMLAttributes, useState } from "react";
import styles from "./styles.module.css";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
}
const TextInput: React.FC<IProps> = (props) => {
  const { label, id, name, placeholder, type, ...rest } = props;
  const [inputType, setInputType] = useState<string>(type);
  const showPassword = () => {
    if (inputType === "text") {
      return setInputType("password");
    }
    setInputType("text");
  };
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <br />
      <div className={styles.inputContainer}>
        <input
          {...rest}
          className={styles.input}
          type={inputType}
          id={id}
          name={name}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button type="button" onClick={showPassword} className={styles.button}>
            show
          </button>
        )}
      </div>
    </div>
  );
};
export default TextInput;
