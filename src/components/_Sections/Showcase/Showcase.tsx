import styles from './Showcase.module.css';
import Section from '@/components/Section/Section';
import { Project } from '@/models/project';
import Title from '@/components/Title/Title';
import { Image as DatoImage } from 'react-datocms';
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({ subsets: ['latin'] });

interface ShowcaseProps {
  projects: Project[];
}

const Showcase = ({ projects }: ShowcaseProps) => {
  return (
    <div className={styles.showcase}>
      <Section threshold={0.35} id="showcase">
        <Title>Showcase</Title>
        <div className={styles.projects}>
          {projects
            .sort((a, b) => a.order - b.order)
            .map((project) => (
              <div key={project.name} className={styles.project__card}>
                <article className={styles.project__card__content}>
                  <div className={styles.project__card__content__img}>
                    <DatoImage data={project.images[0].responsiveImage} />
                  </div>
                  <div className={styles.project__card__content__text}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <span className={firaCode.className}>
                      Stacks:{' '}
                      {project.stacks.map((stack) => stack.name).join(', ')}
                    </span>
                    <a href={project.repositoryurl} target="_blank">
                      View project
                    </a>
                  </div>
                </article>
              </div>
            ))}
        </div>
      </Section>
    </div>
  );
};

export default Showcase;
