import React, { useMemo, useState } from "react";
import Header from "../components/Header";

function Usememo() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const exispansiveCalculation = (num) => {
    console.log("hisoblash");
    for (let i = 0; i < 1000000; i++) {
      num += 1;
    }
    return num;
  };

  const memoizedValue = useMemo(() => exispansiveCalculation(count), [count]);

  return (
    <div>
      <Header />
      <h1>Hisoblash natijasi: {memoizedValue}</h1>
      <button onClick={() => setCount(count + 1)}>
        {" "}
        count ni ochirish: {count}
      </button>
      <button className="bg-blue-500" onClick={() => setOtherCount(otherCount + 1)}>
        {" "}
        otherCount ni ochirish
      </button>
    </div>
  );
}

export default Usememo;
