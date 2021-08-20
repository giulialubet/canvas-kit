import React from 'react';
import {accessibleHide, styled} from '../../../react/common';

interface MessageBlockProps {
  message: string;

  'aria-live': 'polite' | 'assertive';
}

const AccessibleHide = styled('div')(accessibleHide);

export const MessageBlock: React.FC<MessageBlockProps> = ({message, 'aria-live': ariaLive}) => (
  <AccessibleHide role="log" aria-live={ariaLive}>
    {message ? message : ''}
  </AccessibleHide>
);
