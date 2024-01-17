import React, {useState, useCallback /* , useMemo */} from 'react';
/* import User from './User'; */
import Header from './Header';

/* const userData = {
    id: 1, 
    name: "Oğuzcan"
} */

function Counter() {
    
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);
    const increase = useCallback(() => {
        setCount((prev) => prev + amount);
    }, [amount]);
    /* const [name, setName] = useState("Oğuzcan"); */
    /* const userData = useMemo(() => {
        return{
            id: 1,
            name
        }
    }, [name]);
 */
    
    console.log("Counter component re-render");

  return (
    <>
    {/* <User data={userData}/> */}
    <Header increase={increase}/>
    <hr/>

    <h2>{count}</h2>
    {/* {<button onClick={() => setCount(count + 1)}>Increase</button>}*/}    
    <button onClick={increase}>Increase</button>

    <hr/>
    <div>
        Amount: +{amount}
    </div>
    <button onClick={() => setAmount(1)}>+1</button>
    <button onClick={() => setAmount(3)}>+3</button>
    <button onClick={() => setAmount(5)}>+5</button>


    {/* <button onClick={() => setName(name === "Oğuzcan" ? "Ahmet" : "Oğuzcan")}>Change Name</button> */}
    </>
  )
}

export default Counter;