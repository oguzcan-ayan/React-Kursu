import React, {useState, useEffect} from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);

  /*   useEffect(() => {
        console.log("A state has changed.");
    }); */

/*     useEffect(() => {
        console.log("Component has been mount.");
    }, []);

    useEffect(() => {
        console.log("Count state has been changed.");
    }, [count]);

    useEffect(() => {
        console.log("Amount state has been changed.");
    }, [amount]); */

   /*  useEffect(() => {
        console.log("Count state or Amount state has been changed.");
    }, [count, amount]); */

    useEffect(() => {
        let interval = setInterval(() => {
            console.log("interval");
            setCount((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

  return (
    <>
    <h1>{count}</h1>
    {/* <button onClick = {() => setCount(count + amount)}>Increase</button> */}
    <button onClick = {() => setCount((prev) => prev + amount)}>Increase</button>

    <hr/>

    <div>
        Increasing : +{amount}
    </div>

        <button onClick = {() => setAmount(1)}>+1</button>
        <button onClick = {() => setAmount(3)}>+3</button>
        <button onClick = {() => setAmount(10)}>+10</button>
    </>
  )
}

export default Counter;
