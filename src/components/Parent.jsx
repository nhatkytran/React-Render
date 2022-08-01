import { useState } from "react";

function Parent(props) {
  const [count, setCount] = useState(0);

  console.log("Parent");

  return (
    <div>
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        Count - {count}
      </button>
      {props.children}
    </div>
  );
}

export default Parent;
