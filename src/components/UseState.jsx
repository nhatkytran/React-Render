import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  console.log("Use state re-render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setCount((c) => 0)}>Count - {count}</button>
      <button onClick={() => setCount((c) => 5)}>Count - {count}</button>
    </div>
  );
}

export default UseState;
