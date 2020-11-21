import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Post from './components/Posts';
import TodoApp from './components/TodoApp';
import { UserContext } from './contexts/UserContext';
import { 
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState({text: "Some random text"})
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ value, setValue}}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/todo-app" component={TodoApp} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
        </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
