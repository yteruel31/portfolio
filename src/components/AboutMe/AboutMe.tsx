import styles from './AboutMe.module.css';
import Section from '@/components/Section/Section';
import Image from 'next/image';
import portraitImage from '../../../public/portrait.webp';
import {
  CSharpIcon,
  GitIcon,
  JavascriptIcon,
  NextIcon,
  NodeJsIcon,
  ReactIcon,
  TypescriptIcon,
} from '@/components/Icons';
import StyledComponents from '@/components/Icons/StyledComponents';

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <Section threshold={0.35}>
        <section id="about-me" className={styles.aboutMe__container}>
          <div className={styles.aboutMe__title}>
            <h2>About Me</h2>
          </div>
          <div className={styles.aboutMe__content}>
            <div className={styles.aboutMe__content__text}>
              <h3>My background</h3>
              <p>
                I’m Frontend Developer looking for new challenges and
                opportunities to learn and grow. During my early years of
                college I was passionate about creating mods for various PC
                games. And since I’ve continued to learn about more deeply on
                desktop and web development. At first, I’ve debuted as C#
                Developer for developing both desktop and web application for 3
                years. One day during my Backend path, I’ve started to look at
                Frontend side and that was a Eureka ! Since this day I’ve
                continued to learn about the latest advances in the
                web-development environment and improve as a developer.
              </p>
              <p>
                I have used <i>React, TypeScript, Styled-Components</i> and
                other tools to create user-interfaces that are responsive,
                performant, and accessible. From developing icons component
                library to full-stack applications with authentication and
                integration testing, I have a set of skills that allow me to
                plan, test, and create user interfaces.
              </p>
              <p>
                I am currently open to job opportunities where I can
                <i>contribute, learn, and grow</i> as a software developer and
                as a person. If you believe that I am a developer that will mesh
                well with your team and goals, please feel free to contact me!
              </p>
            </div>
            <div className={styles.aboutMe__content__skills}>
              <h3>My skills</h3>
              <ul className={styles.aboutMe__content__skills__list}>
                <li>
                  JavaScript
                  <JavascriptIcon />
                </li>
                <li>
                  TypeScript
                  <TypescriptIcon />
                </li>
                <li>
                  React
                  <ReactIcon />
                </li>
                <li>
                  Next.js
                  <NextIcon />
                </li>
                <li>
                  Styled-Components
                  <StyledComponents />
                </li>
                <li>
                  Node.js
                  <NodeJsIcon />
                </li>
                <li>
                  C# / .NET
                  <CSharpIcon />
                </li>
                <li>
                  Git
                  <GitIcon />
                </li>
              </ul>
            </div>
            <div className={styles.aboutMe__content__image}>
              <Image
                src={portraitImage}
                alt="image of Yoann Teruel"
                width={450}
                height={450}
              />
            </div>
          </div>
        </section>
      </Section>
    </div>
  );
};

export default AboutMe;
