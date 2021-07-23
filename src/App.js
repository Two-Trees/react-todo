import React from 'react'
import './App.css';
import Form from './components/Form.js'
import ToDo from './components/ToDo.js'


function App() {
    const [todos, setTodos] = React.useState([
      {
        text: 'learn react',
        isCompleted: false,
      },
      {
        text: 'meet friend for lunch',
        isCompleted: false,
      },
      {
        text: 'build todo app',
        isCompleted: false,
      }        
    ]);
  
    const addTodo = text => {
      const newTodos = [...todos, {text, isCompleted:false}];
      setTodos(newTodos);
    }
    const removeTodo = index => {
      let temp = [...todos];    
      temp.splice(index, 1);
      setTodos(temp);
    }
  
    return(
      <div className="app">
        <div className="todo-list" >
          {todos.map((todo, i) => (
            <ToDo key={i} index={i} todo={todo} remove={removeTodo}/>
          ))}
          <Form addTodo={addTodo} />
        </div>
      </div>
    );
  }

export default App;
