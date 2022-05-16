import Project from './Project'

import { projects } from 'constants/projects'

import styles from './styles.module.css'

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2>projects</h2>
      <ul>
        {projects.map((project, key) => (
          <Project
            key={key}
            project={project}
          />
        ))}
      </ul>
    </section>
  )
}
