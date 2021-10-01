import React from 'react';

import {StaticStates} from '@workday/canvas-kit-preview-react/tokens';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../utils/storybook';

import {AriaLive, useAriaLiveModel} from '@workday/canvas-kit-labs-react/aria-live';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Aria Live',
  component: AriaLive,
});

export const AriaLiveStates = () => {
  const model = useAriaLiveModel();

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[
          {
            label: 'Closed',
            props: {open: false},
          },
          {
            label: 'Opened',
            props: {open: true},
          },
        ]}
      >
        {props => {
          const state = {open: props.open};

          return (
            <AriaLive model={{...model, state}}>
              <AriaLive.Target>Toggle</AriaLive.Target>
              <AriaLive.Content>Content</AriaLive.Content>
            </AriaLive>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
