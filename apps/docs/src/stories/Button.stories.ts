import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Button } from "@repo/ui";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    className: {
      control: {
        type: "text",
        description: "Apply Tailwind classes for styling",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    className: "border rounded-md bg-blue-300 px-4 py-2",
    "aria-label": "Test Button",
    children: "Test",
  },
};
