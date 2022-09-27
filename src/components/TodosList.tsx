import React from "react";
import { IonInput, IonButton, IonIcon } from "@ionic/react";
import { checkmarkCircle, createOutline, logIn, trashBinOutline } from "ionicons/icons";


const TodosList = ({ todos, setTodos, setEditTodo }: any) => {
  const handleDelete = ({ id }: any) => {
    setTodos(todos.filter((todo: any) => todo.id !== id));
  };

  const handleComplete = (todo: any) => {
    setTodos(
      todos.map((item: any) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }: any) => {
    const findTodo = todos.find((todo: any) => todo.id === id);
    setEditTodo(findTodo);
  };

  console.log(todos);
  
  return (
    <div>
      {todos.map((todo: any) => (
        <li  key={todo.id} className='list-item'
        value={todo.title}>
          {/* <input
            type="text"
            
            onChange={(e) => e.preventDefault()}
          /> */}
          <div>
            <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
              <IonIcon icon={checkmarkCircle} /> 
            </button>
            <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
               <IonIcon icon={createOutline}/>
            </button>
            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
              <IonIcon icon={trashBinOutline}/>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
