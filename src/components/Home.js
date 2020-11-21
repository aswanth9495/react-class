import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserContext';

function Home(props) {
  const {value, setValue} = useContext(UserContext);
  return (
    <div>
      Home page
      <br/>
      <h1> {value.text}</h1>
      <button onClick={() => setValue({ text: "Some another random value" })}>
        Click here
      </button>
    </div>
  );
}

export default Home;