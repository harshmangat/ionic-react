import React, { useEffect } from "react";
import { IonInput, IonButton } from "@ionic/react";
import {v4 as uuidv4} from "uuid";

const Form = ({
  onInput,
  todos,
  onsetInput,
  setTodos,
  editTodo,
  setEditTodo,
}: any) => {
  const updateTodo = (title: any, id: any, completed: any) => {
    const newTodo = todos.map((todo: any) => {
      todo.id === id ? { title, id, completed } : todo
    });
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      onsetInput(editTodo.title);
    } else {
      onsetInput("");
    }
  }, []);

  const onInputChange = (e: any) => {
    onsetInput(e.target.value);
  };
console.log(onInput);

  const onFormSubmit = (e: any) => {
    e.preventDefault();

    if (!editTodo) {
      setTodos([...todos, {id: uuidv4, title: onInput, completed: false }]);
      onsetInput("");
    } else {
      updateTodo(onInput, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form style={{display: "flex"}} onSubmit={onFormSubmit}>
      <IonInput
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={onInput}
        required
        onChange={onInputChange}
      />
      <button type="submit" className="button-add">
        {editTodo ? "Ok" : "Add"}
      </button>
    </form>
  );
};

export default Form;
