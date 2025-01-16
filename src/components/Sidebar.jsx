import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://wallpapercave.com/wp/wp5994159.jpg" width={400} />

            <div className={styles.profile}>
                <Avatar src="https://github.com/mariaburkhardt.png" />
                <strong>maria burkhardt</strong>
                <span>Designer e desenvolvedora</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}