import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import '../src/index.css';

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? 'light';
  return (
    <div
      className={theme === 'dark' ? 'dark' : ''}
      style={{ minHeight: '100vh' }}
    >
      <div className="bg-background text-foreground p-6 min-h-screen">
        <Story />
      </div>
    </div>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    backgrounds: { disable: true },
    layout: 'centered',
  },
  globalTypes: {
    theme: {
      description: 'Theme mode (light or dark) — mirrors the Figma "mode" collection',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
  tags: ['autodocs'],
};

export default preview;
