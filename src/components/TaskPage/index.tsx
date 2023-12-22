import styles from './taskPage.module.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {LuClipboardList} from 'react-icons/lu'
import { Tasks } from '../Tasks'

export function TaskPage(){
    return(
        <>
            <form className={styles.newTaskForm}>
                <input type="text" placeholder="Adicione uma nova tarefa"/>
                <button> Criar<AiOutlinePlusCircle/></button>
            </form>
            <div className={styles.taskPage}>
                <div className={styles.details}>
                    <div className={styles.created}>
                        <p>Tarefas criadas</p>
                        <span>0</span>
                    </div>
                    <div className={styles.done}>
                        <p>Concluídas</p>
                        <span>0</span>
                    </div>
                </div>
            </div>
            <main>
                <div className={styles.noTasks}>
                    <LuClipboardList/>
                    <div className={styles.warning}>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>

                </div>

                <Tasks/>
            </main>
        </>
    )
}