import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../../components/general/button";
import { Jost } from "next/font/google";

const font = Jost({ subsets: ["latin"] });

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/General/Button",
  argTypes: { onClick: { action: "onClick" } },
  decorators: [
    (Story) => (
      <main className={font.className}>
        <Story />
      </main>
    ),
  ],
};

const buttonOptions = {
  sizes: {
    options: ["Small", "Medium", "Large"],
    mapping: {
      Small: "sm",
      Medium: "md",
      Large: "lg",
    },
  },
  variants: {
    options: ["Solid", "Outline", "Light"],
    mapping: {
      Solid: "solid",
      Outline: "outline",
      Light: "light",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultView: Story = {
  args: {
    children: "Save Changes",
    iconArrow: true,
    iconSearch: true,
    pill: true,
  },
  argTypes: {
    size: {
      options: buttonOptions.sizes.options,
      mapping: buttonOptions.sizes.mapping,
      defaultValue: "Small",
    },
    variant: {
      options: buttonOptions.variants.options,
      mapping: buttonOptions.variants.mapping,
      defaultValue: "Solid",
    },
  },
};
