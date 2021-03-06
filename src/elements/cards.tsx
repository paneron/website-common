/** @jsx jsx */

import type React from 'react';
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled';
import { Link } from '@reach/router';

import {
  BIG_SCREEN_BREAKPOINT_PX,
  BORDER_RADIUS_REM,
  CARD_ICON_SIDE_REM,
  CARD_SIDE_PADDING_FACTOR,
  CARD_WIDTH_REM,
} from '../ui-constants';

import { Shaded } from './misc';



export const CardStack = styled.div`
  flex: 1;
  align-self: stretch;

  @media screen and (min-width: ${BIG_SCREEN_BREAKPOINT_PX}px) {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: center;

    & > * {
      width: ${CARD_WIDTH_REM}rem;
      margin: 0 .25rem .5rem .25rem;
    }
  }
`;

export const Card = styled(Shaded)`
  background: white;

  @media screen and (min-width: ${BIG_SCREEN_BREAKPOINT_PX}px) {
    border-radius: ${BORDER_RADIUS_REM}rem;
  }

  display: flex;
  flex-flow: column nowrap;
`;

export const CardHeader = styled.header`
  flex: 0;
  padding: 0 ${CARD_SIDE_PADDING_FACTOR}rem;
  margin: 1rem 0;
`;

export const CardBody: React.FC<{ allowWrap?: true; }> =
function ({ allowWrap, children }) {
  return <main css={css`
    flex: 1;
    padding: 0 ${CARD_SIDE_PADDING_FACTOR}rem;
    ${allowWrap !== true
      ? `
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `
      : null}
  `}>
    {children}
  </main>;
};

export const CardActions = styled.footer`
  flex: 0;
  padding: 0 ${CARD_SIDE_PADDING_FACTOR}rem;
  margin: 1rem 0 1rem 0;
  font-size: 80%;
`;

const CARD_ACTION_LINK_STYLING = `
  color: #444;
  font-weight: 800;
  letter-spacing: .05rem;
  text-transform: uppercase;
`
export const CardActionLink = styled(Link)`
  ${CARD_ACTION_LINK_STYLING}
`
export const CardActionLinkExternal = styled.a`
  ${CARD_ACTION_LINK_STYLING}
`

export const CardBackgroundIcon: React.VoidFunctionComponent<{ imgURL: string; wrapperClassName?: string; className?: string; }> =
function ({ imgURL, wrapperClassName, className }) {
  return (
    <div
        className={wrapperClassName}
        css={css`
          height: ${CARD_ICON_SIDE_REM}rem; width: ${CARD_ICON_SIDE_REM}rem;
          border-radius: 0 ${BORDER_RADIUS_REM}rem 0 0;
          position: absolute;
          overflow: hidden;
          top: 0;
          right: 0;
        `}>
      <img
        src={imgURL}
        className={className}
        css={css`
          height: ${CARD_ICON_SIDE_REM}rem; width: ${CARD_ICON_SIDE_REM}rem;
          display: block;
          position: relative;
          top: -${CARD_ICON_SIDE_REM / 4}rem;
          right: -${CARD_ICON_SIDE_REM / 4}rem;
          opacity: .4;
        `}
      />
    </div>
  );
};
