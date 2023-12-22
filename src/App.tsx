import styles from './App.module.css'
import { Header } from "./components/Header"
import { TaskPage } from "./components/TaskPage"




function App() {
  

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <TaskPage/>
      </main>

    </>
  )
}

export default App
