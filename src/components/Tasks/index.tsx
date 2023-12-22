import { Task } from '../../App'
import styles from './Tasks.module.css'
import {BsTrash3} from 'react-icons/bs'


interface Props{
    task : Task
    deleteTask: (taskId : string)=> void
    taskCompleted: (taskId : string)=> void
}

export function Tasks({task , deleteTask, taskCompleted}: Props){
    
   
    return(
        <>
        <div className={styles.tasks}>
            <input  required id="check" type="checkbox" name='checkBox' onClick={()=> taskCompleted(task.id)}/>
            <label htmlFor="check">
                <p>{task.title}</p>
            </label>
            <button title='deletar comentário' onClick={()=> deleteTask(task.id)} > 
                <BsTrash3/>
            </button>
        </div>
        
        </>
    )
} 