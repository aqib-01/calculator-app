import React, { useEffect, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";

const App = () => {
  const [stat1, setStat1] = useState("");
  const [stat2, setStat2] = useState("");
  const [currDisplay, setCurrDisplay] = useState(stat1);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    setCurrDisplay(stat1);
  }, [stat1]);
  useEffect(() => {
    setCurrDisplay(stat2);
  }, [stat2]);
  const handleKeyClick = (val) => {
    if (currDisplay == stat1) {
      setStat1(stat1 + val);
    } else if (currDisplay == stat2) {
      setStat2(stat2 + val);
    }
  };

  const handleEqual = () => {
    if (operator == "+") {
      setResult(Number(stat1) + Number(stat2));
    } else if (operator == "-") {
      setResult(Number(stat1) - Number(stat2));
    } else if (operator == "*") {
      setResult(Number(stat1) * Number(stat2));
    } else if (operator == "/") {
      setResult(Number(stat1) / Number(stat2));
    }

    setStat1("");
    setStat2("");
    setCurrDisplay(stat1);
    setOperator("");
  };
  const handleOperator = (val) => {
    setOperator(val);
    setCurrDisplay(stat2);
  };
  const handleReset = () => {
    setStat1("");
    setStat2("");
    setCurrDisplay(stat1);
    setResult("");
    setOperator("");
  };
  const handleDel = () => {
    if (currDisplay == stat1) {
      setStat1("");
    } else if (currDisplay == stat2) {
      setStat2("");
    }
  };
  return (
    <div className="wrapper my-10">
      <header className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-white">calc</h2>
        <ThemeBtn />
      </header>
      <main>
        <section className="display-sect">
          <span className="operator-display">{operator}</span>
          <span className="answer">{result ? result : 0}</span>
          <div className="input-nums">{currDisplay ? currDisplay : 0}</div>
        </section>
        <section className="key-sect">
          <button
            className="key"
            value={7}
            onClick={(e) => handleKeyClick(e.target.value)}
          >
            7
          </button>
          <button
            className="key"
            value={8}
            onClick={(e) => handleKeyClick(e.target.value)}
          >
            8
          </button>
          <button
            className="key"
            value={9}
            onClick={(e) => handleKeyClick(e.target.value)}
          >
            9
          </button>
          <button
            className="key !bg-1-dark-blue-key !text-white 
          !shadow !shadow-1-dark-blue-key"
            onClick={handleDel}
          >
            DEL
          </button>
          <button
            className="key"
            value={4}
            onClick={(e) => handleKeyClick(e.target.value)}
          >
            4
          </button>
          <button
            className="key"
            value={5}
            onClick={(e) => handleKeyClick(e.target.value)}
          >
            5
          </button>
          <button
            className="key"
            value={6}
            onClick={(e) => handleKeyClick(e.target.value)}
          >
            6
          </button>
          <button
            className="key"
            value={"+"}
            onClick={(e) => handleOperator(e.target.value)}
          >
            +
          </button>
          <button
            className="key"
            value={1}
            onClick={(e) => handleKeyClick(e.target.value)}
          >
            1
          </button>
          <button
            className="key"
            value={2}
            onClick={(e) => handleKeyClick(e.target.value)}
          >
            2
          </button>
          <button
            className="key"
            value={3}
            onClick={(e) => handleKeyClick(e.target.value)}
          >
            3
          </button>
          <button
            className="key"
            value={"-"}
            onClick={(e) => handleOperator(e.target.value)}
          >
            {" "}
            -
          </button>
          <button
            className="key"
            value={"."}
            onClick={(e) => handleKeyClick(e.target.value)}
          >
            .
          </button>
          <button
            className="key"
            value={0}
            onClick={(e) => handleKeyClick(e.target.value)}
          >
            0
          </button>
          <button
            className="key"
            value={"/"}
            onClick={(e) => handleOperator(e.target.value)}
          >
            /
          </button>
          <button
            className="key"
            value={"*"}
            onClick={(e) => handleOperator(e.target.value)}
          >
            x
          </button>
          <button
            className="key !col-span-6 !bg-1-dark-blue-key !text-white 
          !shadow !shadow-1-dark-blue-key"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            onClick={handleEqual}
            className="key !col-span-6 !bg-1-red 
          !text-white !shadow-md !shadow-1-dark-red active:shadow-none"
          >
            =
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;
