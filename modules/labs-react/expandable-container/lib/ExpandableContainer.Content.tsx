import React from 'react';

import {colors, space} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {ExpandableContainerModelContext} from './ExpandableContainer';
import {ExpandableContainerModel} from './useExpandableContainerModel';

export interface ExpandableContainerContentProps {
  model?: ExpandableContainerModel;
  children: React.ReactNode;
}

const Container = styled('div')<StyledType>({
  background: colors.frenchVanilla600,
  padding: space.s,
  border: `1px solid ${colors.licorice600}`,
});

export const ExpandableContainerContent = createComponent('div')({
  displayName: 'ExpandableContainer.Content',
  Component: ({children, model, ...elemProps}: ExpandableContainerContentProps, ref, Element) => {
    const {state} = useModelContext(ExpandableContainerModelContext, model);

    return state.open ? (
      <Container as={Element} ref={ref} {...elemProps}>
        {children}
      </Container>
    ) : null;
  },
});
