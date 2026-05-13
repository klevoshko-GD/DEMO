import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const FIGMA_URL =
  'https://www.figma.com/design/Z7kXKQO9AfHJ3yUay20Vts/shadcn-ui-components-with-variables---Tailwind-classes---Updated-January-2026--Community-?node-id=73-1989';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: { className: { control: 'text' } },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { className: 'h-4 w-[250px]' } };

export const Card: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};

export const Profile: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  ),
};

export const Playground: Story = { args: { className: 'h-12 w-64 rounded-lg' } };
