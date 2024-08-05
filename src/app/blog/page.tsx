import Title from '@/components/Title/Title';
import { request } from '@/lib/datoCms';
import { gql } from 'graphql-request';
import { Article } from '@/models/article';
import styles from './page.module.css';
import Link from 'next/link';

const getArticles = async () =>
  await request<Article[]>({
    query: gql`
      query {
        allArticles {
          title
          _createdAt
          id
          category {
            name
          }
          slug
        }
      }
    `,
  });

export default async function Blog() {
  const articles = await getArticles();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Title>Blog</Title>
        <ul className={styles.blog__list}>
          {articles.data['allArticles'].map((article) => (
            <li key={article.id} className={styles.blog__entry}>
              <article>
                <time className={styles.blog__entry_sub_title}>
                  {new Date(article._createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>{' '}
                -{' '}
                <span className={styles.blog__entry_sub_title}>
                  {article.category.name}
                </span>
                <h2>
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
