import { useState } from "react";
function TodoApp() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    } 
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  return(
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      {/* form 은 submit이라는 이벤트를 기본적으로 가지고 있다. */}
      <form onSubmit={onSubmit}>
        <input onChange={onChange}
        value={toDo}
        type="text" 
        placeholder="Write your to do..." 
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index)=> (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default TodoApp;