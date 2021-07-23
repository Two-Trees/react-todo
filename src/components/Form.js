import React from 'react'; 
import { api } from './api.js'

// user input - includes validation
function Form({addTodo}){
    const [value,setValue] = React.useState('');
    
    const handleSubmit = e => {
      e.preventDefault();
      api.createItem(value).then((persistedItem) => {
        if(!value) return;
        addTodo(value);
        setValue('');
      })
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          className="input"
          value={value}
          placeholder="Add Todo..."
          onChange={e => setValue(e.target.value)} />
      </form>
    )
  }

  export default Form