import { useEffect, useRef, useState } from "react";
import "./styles.css";

const otp_length = 4;

export default function App() {
  const [inputArr, setInputArr] = useState([...Array(otp_length).fill("")]);
  console.log(inputArr);

  const refArr = useRef([]);

  // useEffect(() => {
  //   refArr.current[0]?.focus();
  // });

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    console.log(value);
    const newValue = value.trim();
    const newArr = [...inputArr];
    console.log("newArr:", newArr);
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div className="App">
      <h3>Validate OTP</h3>
      {inputArr.map((input, index) => (
        <input
          className="input-style"
          type="text"
          key={index}
          value={inputArr[index]}
          ref={(input) => (refArr.current[index] = input)}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
}
