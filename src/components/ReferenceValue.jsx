import { useState } from "react";

const frlix = {
  firstName: "Frlix",
  lastName: "Tran",
};

function ReferenceValue() {
  const [person, setPerson] = useState(frlix);

  console.log("Reference re-renders");

  function handleChange() {
    const new_person = {
      ...person,
      firstName: "Ky",
    };

    setPerson(new_person);
  }

  return (
    <div>
      <button onClick={handleChange}>{person.firstName}</button>
    </div>
  );
}

export default ReferenceValue;
