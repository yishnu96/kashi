import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import { Shloka as ShlokaContainer, Verse, Source, Translation, Separator } from '@site/src/components/ShlokaContent';

export default {
  ...MDXComponents,
  Shloka: ShlokaContainer,
  Verse,
  Source,
  Translation,
  Separator,
};


