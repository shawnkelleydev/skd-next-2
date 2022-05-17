import Button from 'components/Button'
import TechSVG from 'components/TechSVG'

import styles from './styles.module.css'

const { GitHub } = TechSVG

export default function Project({ project }) {
  return (
    <li className={styles.project}>
      <h3>{project.title}</h3>
      <ul>
        {project.technologies.map((Tech, key) => (
          <li key={key}>
            <Tech />
          </li>
        ))}
      </ul>
      <p>{project.description}</p>
      <span>
        <Button
          data-hover-text='see site'
          url={project.liveUrl}
        >
          live
        </Button>
        <Button
          data-hover-text='see repo'
          url={project.ghUrl}
        >
          <GitHub />
        </Button>
      </span>
    </li>
  )
}
