import { useState } from "react";

export function Flag() {
  const [currentState, changeState] = useState("online");
  // type 1
  //   const on = () => {
  //     changeState("online");
  //   };

  //   const off = () => {
  //     changeState("Offline");
  //   };

  //   return (
  //     <div>
  //         <h2 className="text-primary">I am {currentState} </h2>
  //         <br></br>
  //       <button className="btn btn-success" onClick={on}> On </button>
  //       <button className="btn btn-danger decrementBtn" onClick={off}> Off</button>
  //     </div>
  //   );

  // type 2

  const on = () => {
    changeState("online");
  }

  const off = () => {
    changeState("Offline");
  }

  const getButton = (handler, buttonName) => {
    return <button className="btn btn-danger decrementBtn" onClick={handler}> {buttonName} </button>;
  }

  return (
    <div>
      <h2> I am {currentState} </h2>
      <br />
      {getButton(on, "ON")}
      {getButton(off, "OFF")}
    </div>
  );
}
