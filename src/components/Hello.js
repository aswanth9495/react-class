import React, { useEffect, useRef } from 'react';

const Hello = React.memo(({ increment }) => {

  const renders = useRef(0);
  console.log(renders.current++);
  return (<h1><button onClick={increment}> Increment </button></h1>);
});

export default Hello;