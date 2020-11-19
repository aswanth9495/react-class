import { render } from '@testing-library/react';
import React, { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo } from 'react';
import {useForm} from '../hooks/useForm';
import  Hello from './Hello';

function About(props) {
  // const [{ count1, count2 } , setCount] = useState({ count1: 0, count2: 0});
  const [values, handleChange] = useForm({ firstName: '', lastName: ''});
  // const [showHello, setShowHello] = useState(true);
  const [count, setCount] = useState(0);

  // const handleFirstName = (e) => {
  //   setState(prev => ({ ...prev, firstName: e.target.value}))
  // }
  // const handleLastName = (e) => {
  //   setState(prev => ({ ...prev, lastName: e.target.value}))
  // }
  const inputRef = useRef();
  // const renders = useRef(() => { 
  //   console.log("useref is working")
  // });

  // renders.current();

  // useEffect(() => {
  //   console.log("UseEffect is working");
  // });
  // useLayoutEffect(() => {
  //   console.log("UseLayoutEffect is working");
  // });

  const handleFocus = () => {
    // console.log(inputRef);
    // console.log(inputRef.current);
    inputRef.current.focus();
    // console.log(inputRef.current.getBoundingClientRect());
  }

  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  },[]);

  const someSentence = "Blah blah some random sentence";

  const computeSentenceLength = useCallback((sentence) => {
    console.log("Compute is running");
    return sentence.length;
  }, []);

  // const sentenceLength = useMemo(
  //   () => computeSentenceLength(someSentence),
  //    [computeSentenceLength, someSentence]
  // )

  return (
    <div>
      <h1> Count1: {count} </h1>
      {/* <h1> Count1: {count1} </h1>
      <h2> Count2: {count2}</h2> */}
      {/* <button onClick={() => setCount(prev =>  prev + 1) }> Add</button>
      <button onClick={() => setCount(count - 1) }> Minus</button> */}
      {/* <button onClick={() =>
         setCount(prev =>  ({ ...prev, count1: prev.count1 + 1 }) )}>
         Add1 
      </button>
      <button onClick={() => setCount({ count1: count1 - 1, count2: count2}) }> Minus1 </button>
      <button onClick={() =>
         setCount(prev =>  ({ ...prev, count2: prev.count2 + 1 }) )}>
         Add2
      </button>
      <button onClick={() => setCount({ count2: count2 - 1, count1: count1}) }> Minus2 </button> */}

      <input ref={inputRef} type="text" name="firstName" value={values.firstName} onChange={(e)=> handleChange(e)} />
      <input type="text" name="lastName" value={values.lastName} onChange={(e) => handleChange(e)} />
      <button onClick={() => handleFocus()} > Focus First name</button>
      <h1> First Name: {values.firstName} </h1>
      <h1> Last Name: {values.lastName} </h1>

      <br/>
      <Hello increment={handleIncrement} />
      <h1> Sentence Length : {computeSentenceLength(someSentence)}</h1>
      {/* <h1>{showHello && <Hello/>}</h1>
      <button onClick={() => setShowHello(!showHello)}>
        Toggle Hello
      </button> */}
    </div>
  );
}

export default About;