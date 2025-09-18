import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import AdmonitionLayout from '@theme/Admonition/Layout';
import styles from './shloka.module.css';

export type ShlokaAdmonitionProps = React.PropsWithChildren<{
  className?: string;
  title?: React.ReactNode;
  icon?: React.ReactNode;
}> & Record<string, unknown>;

const infimaClassName = 'alert alert--shloka';

const defaultProps = {
  icon: '🕉️',
  title: 'Scriptural Quote (Shloka)',
};

export default function AdmonitionTypeShloka(props: ShlokaAdmonitionProps) {
  return (
    <AdmonitionLayout
      // 'type' is required by the internal Admonition Layout
      type="shloka"
      {...defaultProps}
      {...props}
      className={clsx(
        infimaClassName,
        ThemeClassNames.common.admonition,
        // @ts-expect-error non-standard class name is fine for styling
        ThemeClassNames.common.admonitionTypeShloka,
        styles.admonition,
        props.className,
      )}
    >
      <div className={styles.shlokaContent}>{props.children}</div>
    </AdmonitionLayout>
  );
}


