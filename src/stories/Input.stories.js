import "../components/Input";

export default {
  title: "Input",
  component: "awc-input",
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    placeholder: {
      control: { type: "text" },
      default: "test",
      description: "Описание для placeholder",
      type: { name: "string" },
    },
    color: {
      options: ["default", "red", "purple"],
      control: { type: "select" },
      description: "Описание для color",
    },
  },
};
