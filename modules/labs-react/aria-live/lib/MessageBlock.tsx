import React from 'react';
import {accessibleHide, styled} from '../../../react/common';

interface MessageBlockProps {
  message: string;

  'aria-live': 'polite' | 'assertive';
}

const AccessibleHide = styled('div')(accessibleHide);

export const MessageBlock = ({message, 'aria-live': ariaLive}: MessageBlockProps) => (
  <AccessibleHide role="log" aria-live={ariaLive}>
    {message ? message : ''}
  </AccessibleHide>
);
