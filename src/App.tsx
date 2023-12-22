import { useState } from 'react'
import styles from './App.module.css'
import { Header } from "./components/Header"
import { TaskPage } from "./components/TaskPage"


export interface Task{
  id:string,
  title:string,
  isCompleted:boolean
}

function App() {
  const [tasks , setTasks] = useState<Task[]>([
    {
      id:'1',
      title:"terminar essa carniça",
      isCompleted: false
    }
  ])

  function newTask(taskTitle: string){
    setTasks([
      ...tasks ,
      {
        id:crypto.randomUUID(),
        title:taskTitle,
        isCompleted:false
      }
    ])
  }
  function deleteTask(taskId: string){
    const deletedTask = tasks.filter(task => task.id !== taskId)
    setTasks(deletedTask)
  }

  function taskCompleted(taskId: string){
    const completedTask = tasks.map(task =>{
      if(task.id === taskId){
        return(
          {
            ...task,
            isCompleted: !task.isCompleted
          }
        )
      }
      return task
    })
    setTasks(completedTask)
  }

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <TaskPage
          tasks={tasks}
          newTask={newTask}
          deleteTask={deleteTask}
          taskCompleted={taskCompleted}
        />
      </main>

    </>
  )
}

export default App
