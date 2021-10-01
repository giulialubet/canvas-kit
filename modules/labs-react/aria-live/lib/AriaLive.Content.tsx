import React from 'react';

import {colors, space} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {AriaLiveModelContext} from './AriaLive';
import {AriaLiveModel} from './useAriaLiveModel';

export interface AriaLiveContentProps {
  model?: AriaLiveModel;
  children: React.ReactNode;
}

const Container = styled('div')<StyledType>({
  background: colors.frenchVanilla600,
  padding: space.s,
  border: `1px solid ${colors.licorice600}`,
});

export const AriaLiveContent = createComponent('div')({
  displayName: 'AriaLive.Content',
  Component: ({children, model, ...elemProps}: AriaLiveContentProps, ref, Element) => {
    const {state} = useModelContext(AriaLiveModelContext, model);

    return state.open ? (
      <Container as={Element} ref={ref} {...elemProps}>
        {children}
      </Container>
    ) : null;
  },
});
