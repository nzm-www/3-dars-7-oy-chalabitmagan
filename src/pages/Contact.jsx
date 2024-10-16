import React, { useState } from "react";
import Header from "../components/Header";

function Contact() {
  const [count, setCount] = useState(0);
  return (
    <div className="container pl-40 pr-40">
      <Header />

      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
    </div>
  );
}

export default Contact;
