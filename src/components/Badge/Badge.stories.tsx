import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const FIGMA_URL =
  'https://www.figma.com/design/Z7kXKQO9AfHJ3yUay20Vts/shadcn-ui-components-with-variables---Tailwind-classes---Updated-January-2026--Community-?node-id=72-2718';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Visual variant from the Figma "Variant" property.',
    },
    children: { control: 'text' },
  },
  args: { children: 'Badge', variant: 'default' },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Destructive: Story = { args: { variant: 'destructive' } };
export const Outline: Story = { args: { variant: 'outline' } };

export const Playground: Story = { args: { children: 'New' } };
