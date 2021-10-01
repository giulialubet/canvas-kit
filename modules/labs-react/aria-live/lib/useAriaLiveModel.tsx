import React from 'react';

import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';

type AriaLiveData = {
  id: string;
  message: string;
};

type AriaLiveState = {
  open: boolean;
  politeMessageQueue: AriaLiveData[];
  assertiveMessage: AriaLiveData | undefined;
};

type AriaLiveEvents = {
  open(data: {}): void;
  close(data: {}): void;

  announcePolite(data: AriaLiveData): void;
  announceAssertive(data: AriaLiveData): void;
};

export type AriaLiveModel = Model<AriaLiveState, AriaLiveEvents>;

const ariaLiveEventMap = createEventMap<AriaLiveEvents>()({
  guards: {
    shouldOpen: 'open',
    shouldClose: 'close',
    shouldAnnouncePolite: 'announcePolite',
    shouldAnnounceAssertive: 'announceAssertive',
  },
  callbacks: {
    onOpen: 'open',
    onClose: 'close',
    onAnnouncePolite: 'announcePolite',
    onAnnounceAssertive: 'announceAssertive',
  },
});

export type AriaLiveModelConfig = {
  initialOpen?: boolean;
} & Partial<ToModelConfig<AriaLiveState, AriaLiveEvents, typeof ariaLiveEventMap>>;

export const useAriaLiveModel = (config: AriaLiveModelConfig = {}): AriaLiveModel => {
  const [open, setOpen] = React.useState(config.initialOpen || false);
  const [politeMessageQueue, setQueue] = React.useState<AriaLiveData[]>([]);
  const [assertiveMessage, setAssertiveMessage] = React.useState<AriaLiveData | undefined>(
    undefined
  );

  const state = {
    open,
    politeMessageQueue,
    assertiveMessage,
  };

  const events = useEventMap(ariaLiveEventMap, state, config, {
    announceAssertive(data) {
      setAssertiveMessage(data);
    },
    announcePolite(data) {
      setQueue([...state.politeMessageQueue, data]);
    },
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
