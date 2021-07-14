import React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';

import {AriaLiveModelContext} from './AriaLive';
import {AriaLiveModel} from './useAriaLiveModel';

export interface AriaLiveTargetProps {
  model?: AriaLiveModel;
  children: React.ReactNode;
}

const useDiscloseTarget = (
  {state, events}: AriaLiveModel,
  elemProps: Partial<React.HTMLAttributes<HTMLElement>> = {}
) => {
  return {
    onClick(event: React.MouseEvent<HTMLElement>) {
      elemProps.onClick?.(event);

      if (state.open) {
        events.close({});
      } else {
        events.open({});
      }
    },
  };
};

export const AriaLiveTarget = createComponent('button')({
  displayName: 'AriaLive.Target',
  Component: ({children, model, ...elemProps}: AriaLiveTargetProps, ref, Element) => {
    const ariaLiveModel = useModelContext(AriaLiveModelContext, model);

    const target = useDiscloseTarget(ariaLiveModel, elemProps);

    return (
      <Element ref={ref} {...target}>
        {children}
      </Element>
    );
  },
});
