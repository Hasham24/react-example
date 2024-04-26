import React, { InputHTMLAttributes } from "react";
import PhoneTextInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "./styles.module.css";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}
const PhoneInput: React.FC<IProps> = (props) => {
  const { label, value, placeholder, onChange = () => undefined } = props;
  const handleChange = (event: any) => {
    onChange(event);
  };
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <br />
      <PhoneTextInput
        className={styles.inputContainer}
        defaultCountry="PK"
        placeholder={placeholder}
        value={value}
        onChange={(val) => handleChange(val)}
      />
    </div>
  );
};
export default PhoneInput;
