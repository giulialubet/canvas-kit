import React from 'react';

import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';

type AriaLiveState = {
  open: boolean;
};

type AriaLiveEvents = {
  open(data: {}): void;
  close(data: {}): void;
};

export type AriaLiveModel = Model<AriaLiveState, AriaLiveEvents>;

const ariaLiveEventMap = createEventMap<AriaLiveEvents>()({
  guards: {
    shouldOpen: 'open',
    shouldClose: 'close',
  },
  callbacks: {
    onOpen: 'open',
    onClose: 'close',
  },
});

export type AriaLiveModelConfig = {
  initialOpen?: boolean;
} & Partial<ToModelConfig<AriaLiveState, AriaLiveEvents, typeof ariaLiveEventMap>>;

export const useAriaLiveModel = (config: AriaLiveModelConfig = {}): AriaLiveModel => {
  const [open, setOpen] = React.useState(config.initialOpen || false);

  const state = {
    open,
  };

  const events = useEventMap(ariaLiveEventMap, state, config, {
    open(data) {
      setOpen(true);
    },
    close(data) {
      setOpen(false);
    },
  });

  return {
    state,
    events,
  };
};
