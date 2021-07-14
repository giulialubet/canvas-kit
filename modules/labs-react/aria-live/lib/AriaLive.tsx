import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {useAriaLiveModel, AriaLiveModel, AriaLiveModelConfig} from './useAriaLiveModel';
import {AriaLiveTarget} from './AriaLive.Target';
import {AriaLiveContent} from './AriaLive.Content';

export const AriaLiveModelContext = React.createContext<AriaLiveModel>({} as any);

export interface AriaLiveProps extends AriaLiveModelConfig {
  model?: AriaLiveModel;
  children: React.ReactNode;
}

export const AriaLive = createComponent()({
  displayName: 'AriaLive',
  Component: ({children, model, ...config}: AriaLiveProps) => {
    const value = useDefaultModel(model, config, useAriaLiveModel);

    return <AriaLiveModelContext.Provider value={value}>{children}</AriaLiveModelContext.Provider>;
  },
  subComponents: {
    Target: AriaLiveTarget,
    Content: AriaLiveContent,
  },
});
