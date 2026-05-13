import type { Meta, StoryObj } from '@storybook/react';
import { Terminal, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './Alert';

const FIGMA_URL =
  'https://www.figma.com/design/Z7kXKQO9AfHJ3yUay20Vts/shadcn-ui-components-with-variables---Tailwind-classes---Updated-January-2026--Community-?node-id=72-2633';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'destructive'],
      description: 'Visual variant from the Figma "Variant" property.',
    },
  },
  args: { variant: 'default' },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args} className="w-[460px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  args: { variant: 'destructive' },
  render: (args) => (
    <Alert {...args} className="w-[460px]">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <Alert {...args} className="w-[460px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Alert title</AlertTitle>
      <AlertDescription>Alert description body.</AlertDescription>
    </Alert>
  ),
};
