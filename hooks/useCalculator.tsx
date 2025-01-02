import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "*",
  divide = "/",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");

  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    //TODO: Implement the logic to build the number
    setFormula(number);
  }, [number]);

  const buildNumber = (numberString: string) => {
    
    // Verify if the number is already a decimal
    if (number.includes(".") && numberString === ".") return;

    // Verify if the number is 0 and start with minus number
    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        setNumber(number + numberString);
      }

      // Verify if is another zero and there isnt a dot
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      // Verify if is different from zero and there isnt a dot and its the first number
      if (
        numberString !== "0" &&
        !number.includes(".") &&
        number.startsWith("0")
      ) {
        return setNumber(numberString);
      }

      if (numberString === "0" && !number.includes(".")) {
        return;
      }
    }

    setNumber(number + numberString);
  };

  return {
    // Props
    formula,
    number,
    prevNumber,
    lastOperation,

    // Functions
    buildNumber,
  };
};
