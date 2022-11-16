import { useState, useRef } from "react";
import List from "./components/List/List";
import ListItem from "./components/ListItem/ListItem";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "Kitob oqish",
      isComplate: false,
    },
    {
      id: 2,
      text: "Code yozish",
      isComplate: true,
    },
  ]);
  const inputValue = useRef();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const newTodo = {
      id: todo.length ? todo.at(-1).id + 1 : 1,
      text: inputValue.current.value,
      isComplate: false,
    }
    setTodo([...todo, newTodo]);
    inputValue.current.value = "";
    toast.success("Added successfully 😉");
  }

  return (
    <>
      <div className="container">
        <h1 className="display-2 fw-bold text-center mb-3 mt-3">TODO APP</h1>
        <div className="w-50 mx-auto">
          <form onSubmit={handleFormSubmit} className="p-5 shadow mb-5">
            <div className="input-group">
              <input ref={inputValue} className="form-control" type={"text"} placeholder="Todo..."></input>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
          <List>
            {todo.map(todos => (
              <ListItem key={todos.id} obj={todos} todo={todo} setTodo={setTodo} />
            ))}
          </List>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
