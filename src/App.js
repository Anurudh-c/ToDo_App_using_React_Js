import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');

  function deleteTodo(id) {
    setTodos(toDos.filter((todo) => todo.id !== id));
  }

  function addTodo() {
    if (toDo.trim() === '') {
      return; // Don't add empty todo
    }

    const isDuplicate = toDos.some((todo) => todo.text === toDo);
    if (isDuplicate) {
      return; // Don't add duplicate todo
    }

    setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setTodo(''); // Clear the input field
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={(e) =>
                  setTodos(
                    toDos.map((todo) => {
                      if (todo.id === obj.id) {
                        return { ...todo, status: e.target.checked };
                      }
                      return todo;
                    })
                  )
                }
                value={obj.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times" onClick={() => deleteTodo(obj.id)}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
