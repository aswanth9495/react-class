import React from 'react';

function Hoc(WrappedComponent) {
  // console.log(props)
  return (props) => {
    // console.log('Properties available inside HOC', props)
    return (
    <h1 className="red">
      <WrappedComponent {...props} /> 
    </h1>
  );
  }
}

export default Hoc;