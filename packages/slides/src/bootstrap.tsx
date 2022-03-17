import React from 'react';
//@ts-ignore
import ReactDOM from 'react-dom'; //@ts-ignore
import Deck, { Zoom } from '@mdxp/core'; //@ts-ignore
import * as components from '@mdxp/components'; //@ts-ignore
import MDXPresentation from './presentation.mdx';
import theme from './theme/theme.js';
import themeComponents from './theme/theme-components.js';
import './index.css';

ReactDOM.render(
  <Zoom
    maxWidth={1000}
    width={1000}
    aspectRatio={16 / 9}
    sx={{ maxWidth: '100vw', maxHeight: '100vh' }}
  >
    <Deck
      components={{ ...components, ...themeComponents }}
      Layout={themeComponents.MDXPHeaderLayout}
      layoutOptions={{ showSlideNum: false }}
      theme={theme}
      keyboardTarget={window}
    >
      <MDXPresentation />
    </Deck>
  </Zoom>,
  document.getElementById('root')
);
