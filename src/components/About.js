import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserContext';
import { useSelector, useDispatch  } from 'react-redux';
import { deleteTodoItem } from '../stores/todoAppStore';

function About(props) {
  const dispatch = useDispatch();
  const {
    todoList
  } = useSelector((state) => ({
    todoList: state.todoList
  }))

  const handleDelete = ({ id }) => {
    dispatch(deleteTodoItem({id}))
  }

  return (
    <div>
      About page
      {todoList.map((item, i) => (
          <h1 key={i}>
            {i+1}. {item.text}
            <button onClick={() => handleDelete({ id: item.id})}>
              Delete  
            </button> 
          </h1> 
        ))}
      <br/>
    </div>
  );
}

export default About;