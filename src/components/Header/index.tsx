import styles from "./Header.module.css"
import rocket from "../../assets/rocket.svg"

export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={rocket} alt="logo todo" />
                <div className={styles.todo}>
                    <p className={styles.to}>to</p>
                    <p className={styles.do}>do</p>
                </div>
            </div>
         </header>
    )
}