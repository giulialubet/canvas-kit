/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {AriaLive} from '@workday/canvas-kit-labs-react/aria-live';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import README from '../README.md';

export default {
  title: 'Labs/Aria Live/React',
  decorators: [withReadme(README)],
  component: AriaLive,
};

export const Default = () => (
  <AriaLive>
    <AriaLive.Target as={SecondaryButton}>Toggle</AriaLive.Target>
    <AriaLive.Content>Content</AriaLive.Content>
  </AriaLive>
);
