import { ActiveLink } from '../ActiveLink'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <strong>Bloog 📁</strong>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/projects">
            <a>Projects</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  )
}
