import {useState} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Gap bac si',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
        id:2,
        text: 'Di hop voi doi tac',
        day: 'Feb 6th at 8:30am',
        reminder: true
    },
    {
        id:3,
        text: 'Di an voi ban be',
        day: 'Feb 6th at 7:30pm',
        reminder: true
    }
  ])

  //add task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  //reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) =>
      task.id === id? { ...task,   reminder: !task.reminder} : task
    ))
  }
  
  return (
    <div className="container">
      <Header/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : 'No tasks to show'
      }
    </div>
  );
}


// class App extends React.Component {
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
