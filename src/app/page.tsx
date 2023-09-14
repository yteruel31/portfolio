import styles from './page.module.css';
import Hero from '@/components/_Sections/Hero/Hero';
import AboutMe from '@/components/_Sections/AboutMe/AboutMe';
import Showcase from '@/components/_Sections/Showcase/Showcase';
import { request } from '@/lib/datoCms';
import { gql } from 'graphql-request';
import { Project } from '@/models/project';

const getProjects = async () =>
  await request<Project[]>({
    query: gql`
      query {
        allProjects(first: "3", orderBy: order_ASC) {
          demourl
          description
          inprogress
          images {
            responsiveImage(imgixParams: { w: 500, h: 300, auto: format }) {
              base64
              height
              sizes
              src
              title
              alt
              width
              aspectRatio
              webpSrcSet
              srcSet
              bgColor
            }
          }
          name
          order
          repositoryurl
          stacks {
            name
          }
        }
      }
    `,
  });

export default async function Home() {
  const firstThreeProjectsResult = await getProjects();

  return (
    <main className={styles.main}>
      <Hero />
      <AboutMe />
      <Showcase projects={firstThreeProjectsResult.data['allProjects']} />
    </main>
  );
}
