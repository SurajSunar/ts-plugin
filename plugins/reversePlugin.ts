import type { CustomContext, CustomPlugin } from "../types.ts";

const ReversePlugin: CustomPlugin = {
  name: "ReversePlugin",
  execute: (context: CustomContext): CustomContext => {
    const content = context.content.split("").reverse().join("");
    return { ...context, content };
  },
};

export default ReversePlugin;
