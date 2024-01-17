import React, { forwardRef } from 'react';
import './App.css';
import { useRef } from 'react';

/* function Input(props, ref){
  return <input type='text' ref={ref} {...props}/>
}

Input = forwardRef(Input); */

const Input = forwardRef((props, ref) => {
  return <input type='text' ref={ref} {...props}/>
})


function App() {

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <h1>useRef() - forwardRef()</h1>

      <input type='text' ref={inputRef}/> {/* for useRef() */}
        <br/>
        <br/>
      <Input ref={inputRef}/> {/* for forwardRef() */}
        <br/>
        <br/>
      <button onClick={focusInput}>Focus it</button>
    </>
  );
}

export default App;
