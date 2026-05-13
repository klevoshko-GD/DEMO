import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const FIGMA_URL =
  'https://www.figma.com/design/Z7kXKQO9AfHJ3yUay20Vts/shadcn-ui-components-with-variables---Tailwind-classes---Updated-January-2026--Community-?node-id=73-1978';

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: { children: { control: 'text' } },
  args: { children: 'Email address' },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ForInput: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label {...args} htmlFor="email" />
      <input
        id="email"
        type="email"
        className="h-10 rounded-md border border-input bg-background px-3 text-sm"
        placeholder="you@example.com"
      />
    </div>
  ),
};

export const Playground: Story = {};
