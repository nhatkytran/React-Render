import { useState } from "react";
import Parent from "./Parent";
import Child from "./Child";

function Grandparent() {
  const [count, setCount] = useState(0);

  console.log("Grandparent");

  return (
    <div>
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        Count - {count}
      </button>
      <Parent>
        <Child></Child>
      </Parent>
    </div>
  );
}

export default Grandparent;
