import { createHighlighter, makeSingletonHighlighter } from 'shiki';
import { bundledLanguages } from 'shiki/bundle/web';
import styles from './SyntaxHightlight.module.css';

interface SyntaxHighlightProps {
  code: string;
  language: string;
}

const getHighlighter = makeSingletonHighlighter(createHighlighter);

export const SyntaxHighlight = async ({
  code,
  language,
}: SyntaxHighlightProps) => {
  const highlighter = await getHighlighter({
    themes: ['github-dark'],
    langs: Object.keys(bundledLanguages),
  });

  const html = highlighter.codeToHtml(code, {
    lang: language,
    theme: 'github-dark',
  });

  return (
    <div className={styles.root} dangerouslySetInnerHTML={{ __html: html }} />
  );
};
