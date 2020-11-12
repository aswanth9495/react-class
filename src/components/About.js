import React from 'react';

function About(props) {
  // console.log(props)
  return (
    <div>
      <h1> About Page with Id{props.match.params.id}</h1>
    </div>
  );
}

export default About;