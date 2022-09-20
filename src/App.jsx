import React, { useState } from "react";
import './App.css';
import Tasks from "./components/Tasks";
import addTask from "./components/addTask";

const App = () => {
  //let message = "Hello Word!";
  const[tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação' ,
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },
  ]);
  
  return(
   <div> 
            <div className="container"> 
            <addTask />
            <Tasks tasks={tasks}/></div>
            
    </div>
  );       
};

export default App;