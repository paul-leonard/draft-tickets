import styles from '../styles/Footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div>
        <h5><a href="https://www.linkedin.com/in/paulryanleonard/">Created by Paul Leonard</a></h5>
        <p>
          <a href="https://www.linkedin.com/in/paulryanleonard/">LinkedIn</a>
          |
          <a href="https://github.com/paul-leonard">GitHub</a>
        </p>
        <p>
          <a href="https://github.com/paul-leonard/draft-tickets">Frontend Repo</a>
          |
          <a href="https://github.com/getKraken/getKraken">Backend Repo</a>
        </p>
      </div>
      
    </footer>
  )
}