import { toast } from 'react-toastify';
const ListItem = ({ obj, todo, setTodo }) => {
    const { id, text, isComplate } = obj;

    const handleDeleteTodo = (todoId) => {
        const filteredArray = todo.filter(el => el.id !== todoId)
        setTodo([...filteredArray])
        toast.error("DELETED")
    }
    const handleEditId = (todoId, todoText) => {
        const editedTodo = prompt("Yangi narsa kititing", todoText);
        const findedTodo = todo.find((el) => el.id === todoId);
        findedTodo.text = editedTodo;
        setTodo([...todo])
        toast.success("EDITED 👌")
    }

    const handleCheckInput = (todoId) => {
        const findedTodo = todo.find((el) => el.id === todoId);
        findedTodo.isComplate = !findedTodo.isComplate;
        setTodo([...todo])
    }
    return (
        <li className="d-flex align-items-center mt-3">
            <span>ID : {id}</span>
            <input onChange={() => handleCheckInput(id)} defaultChecked={isComplate ? true : false} className="form-check-input mx-3" type={"checkbox"}></input>
            <strong className={`text-danger ${isComplate ? 'text-decoration-line-through' : ''}`}>{text}</strong>
            <button onClick={() => handleEditId(id, text)} className="btn btn-warning mx-3" disabled={isComplate ? true : false}>Edit</button>
            <button onClick={() => handleDeleteTodo(id)} className="btn btn-danger" disabled={isComplate ? true : false}>Delete</button>
        </li >
    );
};

export default ListItem;
