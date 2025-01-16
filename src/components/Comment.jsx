import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return(
        <div className={styles.comment} >
            <Avatar hasBorder={false} src="https://github.com/mariaburkhardt.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                     <header>
                        <div className={styles.authorAndTime}>
                            <strong>Maria Burkhardt</strong>
                            <time title='13 de Maio às 13:55h' dateTime="2024-05-13 13:55:00">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                     </header>
                     <p>Muito bom Az, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}