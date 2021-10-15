/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import { Helmet } from 'react-helmet';
import globalStyle, { Spinner } from './GlobalStyle';
import { TopBar, TopBarLink, TopBarInternalLinkSelected, TopBarLinkSelected, TopBarInternalLink } from '../elements/top-bar';


export interface AppOptions {
  title: string;
  topBarIsHeader?: true;
  topLinks: {
    target: string;
    text: JSX.Element | string;
    title?: string;
    external?: true;

    isHeader?: true;
    selected?: true;
  }[];
}


export default function makeApp(opts: AppOptions):
React.VoidFunctionComponent<Record<never, never>> {
  return function App() {
    return (
      <Root>
        {globalStyle}

        <Helmet>
          <title>{opts.title}</title>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>

        <TopBar
            role={opts.topBarIsHeader ? 'heading' : undefined}
            aria-level={opts.topBarIsHeader ? 1 : undefined}>
          {opts.topLinks.map(topLink => topLink.external
            ? topLink.selected
              ? <TopBarLinkSelected
                    href={topLink.target}
                    role={topLink.isHeader && !opts.topBarIsHeader ? 'heading' : undefined}
                    aria-level={topLink.isHeader && !opts.topBarIsHeader ? 1 : undefined}
                    title={topLink.title}>
                  {topLink.text}
                </TopBarLinkSelected>
              : <TopBarLink
                    href={topLink.target}
                    role={topLink.isHeader && !opts.topBarIsHeader ? 'heading' : undefined}
                    aria-level={topLink.isHeader && !opts.topBarIsHeader ? 1 : undefined}
                    title={topLink.title}>
                  {topLink.text}
                </TopBarLink>
            : topLink.selected
              ? <TopBarInternalLinkSelected
                    to={topLink.target}
                    role={topLink.isHeader && !opts.topBarIsHeader ? 'heading' : undefined}
                    aria-level={topLink.isHeader && !opts.topBarIsHeader ? 1 : undefined}
                    title={topLink.title}>
                  {topLink.text}
                </TopBarInternalLinkSelected>
              : <TopBarInternalLink
                    to={topLink.target}
                    role={topLink.isHeader && !opts.topBarIsHeader ? 'heading' : undefined}
                    aria-level={topLink.isHeader && !opts.topBarIsHeader ? 1 : undefined}
                    title={topLink.title}>
                  {topLink.text}
                </TopBarInternalLink>
          )}
        </TopBar>

        <React.Suspense fallback={<Spinner />}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Root>
    );
  };
}
