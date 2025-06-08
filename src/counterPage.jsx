import { useState } from "react";
function CounterPage() {
  const [number, setNumber] = useState(0);
  function increaseNumber() {
    setNumber(number + 1);
  }
  const decreaseNumber = () => {
    setNumber(number - 1);
  };
  const resetNumber = () => {
    setNumber(0);
  };
  //   console.log(useNumber(2));

  return (
    <>
      <div className="container ">
        <h1>{number}</h1>
        <button onClick={increaseNumber}>Increase</button>
        <button onClick={resetNumber}>Reset</button>
        <button onClick={decreaseNumber}>Decrease</button>
      </div>
    </>
  );
}

export default CounterPage;
