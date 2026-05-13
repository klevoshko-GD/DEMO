import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

const FIGMA_URL =
  'https://www.figma.com/design/Z7kXKQO9AfHJ3yUay20Vts/shadcn-ui-components-with-variables---Tailwind-classes---Updated-January-2026--Community-?node-id=73-1987';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
  },
  args: { orientation: 'horizontal' },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: (args) => (
    <div className="w-72 space-y-2">
      <div className="text-sm">Radix Primitives</div>
      <div className="text-sm text-muted-foreground">An open-source UI component library.</div>
      <Separator {...args} className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div className="flex h-12 items-center gap-4 text-sm">
      <span>Item 1</span>
      <Separator {...args} />
      <span>Item 2</span>
      <Separator {...args} />
      <span>Item 3</span>
    </div>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <div className={args.orientation === 'vertical' ? 'h-12 flex' : 'w-72'}>
      <Separator {...args} />
    </div>
  ),
};
