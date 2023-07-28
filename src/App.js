import { useState } from "react";
import { useAppContext } from "./TaskContext";

function App() {
  const { state: { tasks }, dispatch } = useAppContext();
  const [task, setTask] = useState();
  console.log(tasks);
  console.log(dispatch);

  return (
    <div className="App">
      {tasks.map(task => (
        <div>
          <h1>{task.task}</h1>
          <button onClick={() => dispatch({ type: 'deleteTask', payload: task.id })}>Delete Task</button>
        </div>
      ))}


      <input placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={() => dispatch({ type: 'addTask', payload: { id: new Date(), task: task } })}>Add task</button>
    </div>
  );
}

export default App;
