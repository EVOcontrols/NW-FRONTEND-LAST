import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { PageDecorator } from "@shared/config";
import { NewsEditor } from "./Editor";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Widgets/NewsEditor",
  component: NewsEditor,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof NewsEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Editor: Story = {
  args: {
    handleUploadImage: fn(),
    errors: {},
    setFieldValue: fn(),
    loading: false,
    values: {
      cover: "",
      title_en: "",
      title_ru: "",
      html_content_en: "",
      html_content_ru: "",
    },
  },
};
export const Loading: Story = {
  args: {
    handleUploadImage: fn(),
    errors: {},
    setFieldValue: fn(),
    loading: true,
    values: {
      cover: "",
      title_en: "",
      title_ru: "",
      html_content_en: "",
      html_content_ru: "",
    },
  },
};

export const OnPage: Story = {
  args: {
    handleUploadImage: fn(),
    errors: {},
    setFieldValue: fn(),
    loading: false,
    values: {
      cover:
        "https://northwaterfront.evocontrols.com/files/b654ab99781ad3fc.jpg",
      title_en: "",
      title_ru: "",
      html_content_en: "",
      html_content_ru: "",
    },
  },
  decorators: [PageDecorator],
};
