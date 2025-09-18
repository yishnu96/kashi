import React from 'react';
import styles from './styles.module.css';

type WithChildren = React.PropsWithChildren<{
  className?: string;
}>;

export const Verse: React.FC<WithChildren> = ({ children }) => (
  <div className={styles.verse}>{children}</div>
);

export const Source: React.FC<WithChildren> = ({ children }) => (
  <div className={styles.source}>
    <span className={styles.sourceIcon}>📜</span>
    Source: <em> {children} </em>
  </div>
);

export const Translation: React.FC<WithChildren> = ({ children }) => (
  <div className={styles.translation}>{children}</div>
);

export const Separator: React.FC = () => (
  <div className={styles.separator}>
    <div className={styles.separatorDots}></div>
  </div>
);

export const Shloka: React.FC<WithChildren> = ({ children }) => (
  <div className={styles.shlokaContainer}>{children}</div>
);


