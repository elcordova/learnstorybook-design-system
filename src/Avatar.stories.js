import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Avatar } from './Avatar';

export default {
  title: 'Design System|Avatar',

  parameters: {
    component: Avatar,
  },
};

export const standard = () => (
  <Avatar
    size="large"
    username="Tom Coleman"
    src="https://www.gravatar.com/avatar/26b27e7762b8bb9cd039ea765e6ae6e3"
  />
);

export const sizes = () => (
  <div>
    <Avatar
      size="large"
      username="Tom Coleman"
      src="https://www.gravatar.com/avatar/26b27e7762b8bb9cd039ea765e6ae6e3"
    />
    <Avatar
      size="medium"
      username="Tom Coleman"
      src="https://www.gravatar.com/avatar/26b27e7762b8bb9cd039ea765e6ae6e3"
    />
    <Avatar
      size="small"
      username="Tom Coleman"
      src="https://www.gravatar.com/avatar/26b27e7762b8bb9cd039ea765e6ae6e3"
    />
    <Avatar
      size="tiny"
      username="Tom Coleman"
      src="https://www.gravatar.com/avatar/26b27e7762b8bb9cd039ea765e6ae6e3"
    />
  </div>
);

export const initials = () => (
  <div>
    <Avatar username="Tom Coleman" />
    <Avatar username="Dominic Nguyen" />
    <Avatar username="Kyle Suss" />
    <Avatar username="Michael Shilman" />
  </div>
);

export const loading = () => (
  <div>
    <Avatar size="large" loading />
    <Avatar size="medium" loading />
    <Avatar size="small" loading />
    <Avatar size="tiny" loading />
  </div>
);

export const large = () => (
  <div>
    <Avatar loading size="large" />
    <Avatar size="large" username="Tom Coleman" />
    <Avatar
      size="large"
      username="Tom Coleman"
      src="https://www.gravatar.com/avatar/26b27e7762b8bb9cd039ea765e6ae6e3"
    />
  </div>
);

export const knobs = () => (
  <Avatar
    loading={boolean('Loading')}
    size={select('Size', ['tiny', 'small', 'medium', 'large'])}
    username="Dominic Nguyen"
    src="https://www.gravatar.com/avatar/26b27e7762b8bb9cd039ea765e6ae6e3"
  />
);

knobs.story = {
  decorators: [withKnobs],
};
