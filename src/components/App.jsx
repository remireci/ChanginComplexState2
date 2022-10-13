import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const [value, name] = event.target;
    // you cannot access 'event' in stateful setters, because
    // it' not a real event but a synthetic event, created by
    //react

    setFullName((prevValue) => {
      console.log(prevValue);
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.fName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });

    console.log(value);
    console.log(name);
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
