import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Dashboard from "./routes/Dashboard";
import { Outlet } from "react-router-dom";
import { setupIonicReact } from "@ionic/react";
import { IonCard, IonCardHeader, IonCardContent } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./themes/variables.css";
import Login from "./routes/Login";
import Header from "./components/Header";
import TodosList from "./components/TodosList";
import Form from "./components/Form";

setupIonicReact();

function App() {
  const [input, setInput] = useState<any>("");
  const [todos, setTodos] = useState<any>([]);
  const [editTodo, setEditTodo] = useState<any>(null);

  return (
    <IonCard className="container">

      <IonCardContent className="app-wrapper">
        <IonCardHeader>
        <Header />
        </IonCardHeader>
      <div>
      <Form
        onInput={input}
        onsetInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      </div>
      
      
        <TodosList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </IonCardContent>
    </IonCard>
  );
}

export default App;
