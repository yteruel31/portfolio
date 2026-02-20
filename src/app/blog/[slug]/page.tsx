import { request } from '@/lib/datoCms';
import { gql } from 'graphql-request';
import type { Article } from '@/models/article';
import {
  Image,
  renderNodeRule,
  ResponsiveImageType,
  StructuredText,
} from 'react-datocms';
import {
  isCode,
  isHeading,
  isLink,
  isParagraph,
} from 'datocms-structured-text-utils';
import { render as toPlainText } from 'datocms-structured-text-to-plain-text';
import styles from './page.module.css';
import Title from '@/components/Title/Title';
import { SyntaxHighlight } from '@/components/SyntaxHighlight/SyntaxHighlight';
import { Metadata } from 'next';

const getArticle = async (slug: string) =>
  await request<Article>({
    query: gql`
      query {
        article(
          filter: {
            slug: { eq: "${slug}" }
          }
        ) {
          id
          title
          _createdAt
          category {
            name
          }
          seo {
            description
            title
            image {
              url
              width
              height
            }
          }
          content {
            value
            blocks {
              __typename
              ... on ImageRecord {
                id
                image {
                  responsiveImage(imgixParams: { w: 500, h: 400, auto: format }) {
                    alt
                    aspectRatio
                    base64
                    bgColor
                    height
                    sizes
                    src
                    title
                    webpSrcSet
                    width
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  const { title, description, image } = article.data['article'].seo;

  return {
    title: title + ' | Yoann TERUEL',
    description,
    openGraph: {
      images: [{ url: image?.url, width: image?.width, height: image?.height }],
    },
  };
}

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Title>{article.data['article'].title}</Title>
        <p className={styles.article_container__p}>
          <time className={styles.article_container__time}>
            {new Date(article.data['article']._createdAt).toLocaleDateString(
              'en-US',
              {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              },
            )}
          </time>
        </p>
        <div className={styles.article_container}>
          <StructuredText<{
            image: { responsiveImage: ResponsiveImageType };
            __typename: string;
            id: string;
          }>
            data={article.data['article'].content}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case 'ImageRecord':
                  return (
                    <Image
                      data={record.image.responsiveImage}
                      className={styles.article_container__img}
                    />
                  );
                default:
                  return null;
              }
            }}
            customNodeRules={[
              renderNodeRule(isHeading, ({ node, children, key }) => {
                const HeadingTag = `h${node.level}`;
                const anchor = toPlainText(node)
                  ?.toLowerCase()
                  .replace(/ /g, '-')
                  .replace(/[^\w-]+/g, '');

                return (
                  // @ts-ignore
                  <HeadingTag key={key} id={anchor}>
                    <a href={`#${anchor}`}>#</a>
                    {children}
                  </HeadingTag>
                );
              }),
              renderNodeRule(
                isParagraph,
                ({ adapter: { renderNode }, children, key }) => {
                  return renderNode(
                    'p',
                    { key, className: styles.article_container__p },
                    children,
                  );
                },
              ),
              renderNodeRule(isCode, ({ node, key }) => {
                return (
                  <SyntaxHighlight
                    key={key}
                    code={node.code}
                    language={node.language || 'plaintext'}
                  />
                );
              }),
              renderNodeRule(
                isLink,
                ({ adapter: { renderNode }, node, children, key }) => {
                  return renderNode(
                    'a',
                    {
                      key,
                      className: styles.article_container__a,
                      href: node.url,
                      target: '_blank',
                    },
                    children,
                  );
                },
              ),
            ]}
          />
        </div>
      </div>
    </main>
  );
}
