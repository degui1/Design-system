import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark'
    },
    docs: {
      default: 'dark',
      themes: themes.dark
    }
  },
};

export default preview;
