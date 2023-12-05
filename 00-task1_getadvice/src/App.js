import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState(""); // advice: where my advice will be stored
                                            // setAdvice: The function where I should update the state
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data.slip.advice); // before using useState()
    setAdvice(data.slip.advice); // after using useState
    setCount((c) => c + 1);
  }
  // I need when reloading the page the advice shown at first
  useEffect(function () {
    getAdvice();
  }, []);
 // number 2 at the first run referes to the stictMode (will be explained later)

// useEffect params: 1. function that we wanna to get excuted at the beginning --> so when this component first gets loaded, basically.
//                   2. dependency array (will be explained later)

  return (
    //BEFORE USING useState

    // <div>
    //   <h1>Hello Hidayah</h1>
    //   <p>Welcome To Your First ReactJs Course</p>
    //   <button onClick={getAdvice}>Get Advice</button>
    // </div>

    // AFTER USING useState
    
    <div className="container">
      <h1>Hello Hidayah</h1>
      <p>Your Today Advice Is: <span>{advice}</span></p>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice.
    </p>
  );
}
