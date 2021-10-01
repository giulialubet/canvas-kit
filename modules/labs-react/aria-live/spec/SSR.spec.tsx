/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {AriaLive} from '../';

describe('AriaLive', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <AriaLive>
          <AriaLive.Target>Target</AriaLive.Target>
          <AriaLive.Content>Content</AriaLive.Content>
        </AriaLive>
      );
    expect(ssrRender).not.toThrow();
  });
});
