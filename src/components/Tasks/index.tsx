import styles from './Tasks.module.css'
import {BsTrash3} from 'react-icons/bs'




export function Tasks(){
    
   
    return(
        <>
        <div className={styles.tasks}>
            <input  required id="check" type="checkbox" name='checkBox'/>
            <label htmlFor="check">
                <p>luma luma caba caba tumba tumba</p>
            </label>
            <button title='deletar comentário' > 
                <BsTrash3/>
            </button>
        </div>
        
        </>
    )
} 