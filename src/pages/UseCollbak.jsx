import React, { useState, useCallback } from "react";
import Header from "../components/Header";
const UseCollbak = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <Header />
      <h1>Count: {count}</h1>
      <button onClick={increment}>Oshirish</button>
    </div>
  );
};

export default UseCollbak;
