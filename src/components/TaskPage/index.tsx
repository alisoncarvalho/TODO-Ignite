import styles from './taskPage.module.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {LuClipboardList} from 'react-icons/lu'
import { Tasks } from '../Tasks'
import { Task } from '../../App'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
    tasks: Task[],
    newTask: (taskTitle:string) => void,
    deleteTask: (taskId : string) => void,
    taskCompleted:(taskId : string) => void
}
export function TaskPage({tasks , newTask , deleteTask, taskCompleted}:Props){
    const [title , setTitle] = useState("")

    const taskQuantity = tasks.length
    const completedTasks = tasks.filter((task)=> task.isCompleted).length

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        newTask(title)
        setTitle("")
    }
    function changeTitle( event:ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value)
    }
    
    return(
        <>
            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input type="text" placeholder="Adicione uma nova tarefa" onChange={changeTitle} value={title}/>
                <button> Criar<AiOutlinePlusCircle/></button>
            </form>
            <div className={styles.taskPage}>
                <div className={styles.details}>
                    <div className={styles.created}>
                        <p>Tarefas criadas</p>
                        <span>{taskQuantity}</span>
                    </div>
                    <div className={styles.done}>
                        <p>Concluídas</p>
                        <span>{completedTasks} de {taskQuantity}</span>
                    </div>
                </div>
            </div>
            <main>
                
                {
                    tasks.length <= 0 && (
                        <div className={styles.noTasks}>
                            <LuClipboardList/>
                            <div className={styles.warning}>
                                <strong>Você ainda não tem tarefas cadastradas</strong>
                                <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>

                    </div>
                    )
                }
                
                {
                    tasks.map((task) => (
                        
                        <Tasks
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            taskCompleted={taskCompleted}
                        />
                        
                    ))
                }
                    
                
                
            </main>
        </>
    )
}