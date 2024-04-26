import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Select, { components } from "react-select";
import styles from "./styles.module.css";
interface IProps {
  label: string;
}
const CountrySelect: React.FC<IProps> = (props) => {
  const { label } = props;
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const DropdownIndicator = (props: any) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <IoMdArrowDropdown size={15} />
        </components.DropdownIndicator>
      )
    );
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <br />
      <div className={styles.selectContainer}>
        <Select
          options={countries}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              margin: 0,
              border: "none",
              boxShadow: "none",
              "&:hover": {
                border: "0px false transparent",
              },
            }),
            dropdownIndicator: (styles) => ({
              ...styles,
              color: "#000000",
            }),
          }}
          components={{ DropdownIndicator, IndicatorSeparator: () => null,  }}
          className={styles.selector}
          value={selectedCountry}
          onChange={(selectedOption: any) => setSelectedCountry(selectedOption)}
        />
      </div>
    </div>
  );
};
export default CountrySelect;
